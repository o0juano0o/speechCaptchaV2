import transcription from "../deepSpeech/speechToText";

export const getTrascription = async (req, res) => {
  const audio = req.body;
  transcription(audio).then((response) => {
    console.log("aca", response);
    return res.json(response);
  });
};
