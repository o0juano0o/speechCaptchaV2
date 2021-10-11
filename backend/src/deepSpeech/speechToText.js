const DeepSpeech = require("deepspeech");
const Fs = require("fs");
const Sox = require("sox-stream");
const MemoryStream = require("memory-stream");
const Duplex = require("stream").Duplex;
const Wav = require("node-wav");
const path = require("path");
//const modele = require("./spanish/output_graph_es.pbmm")
//let modelPath = "../models/deepspeech-0.9.3-models.pbmm";
//let scorerPath = "../models/deepspeech-0.9.3-models.scorer";

const transcription = async () => {
  let modelPath = path.join(__dirname, "/spanish/output_graph_es.pbmm");
  let model = new DeepSpeech.Model(modelPath);
  let desiredSampleRate = model.sampleRate();
  let scorerPath = path.join(__dirname, "./spanish/kenlm_es.scorer");
  model.enableExternalScorer(scorerPath);
  let audioFile = path.join(__dirname, "./audio/test2Luca.wav");

  if (!Fs.existsSync(audioFile)) {
    console.log("file missing:", audioFile);
    process.exit();
  }

  const buffer = Fs.readFileSync(audioFile);
  const result = Wav.decode(buffer);

  if (result.sampleRate < desiredSampleRate) {
    console.error(
      "Warning: original sample rate (" +
        result.sampleRate +
        ") is lower than " +
        desiredSampleRate +
        "Hz. Up-sampling might produce erratic speech recognition."
    );
  }

  function bufferToStream(buffer) {
    let stream = new Duplex();
    stream.push(buffer);
    stream.push(null);
    console.log(stream);
    return stream;
  }

  let audioStream = new MemoryStream();
  bufferToStream(buffer)
    .pipe(
      Sox({
        global: {
          "no-dither": true,
        },
        output: {
          bits: 16,
          rate: desiredSampleRate,
          channels: 1,
          encoding: "signed-integer",
          endian: "little",
          compression: 0.0,
          type: "raw",
        },
      })
    )
    .pipe(audioStream);

  const text = new Promise((resolve, reject) => {
    audioStream.on("finish", () => {
      let audioBuffer = audioStream.toBuffer();

      const audioLength = (audioBuffer.length / 2) * (1 / desiredSampleRate);
      console.log("audio length", audioLength);

      let result = model.stt(audioBuffer);

      console.log("result:", result);

      resolve(result);
    });
  });
  return text;
};

module.exports = transcription;
