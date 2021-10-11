import transcription from "../deepSpeech/speechToText";

export const getTrascription = async (req, res) => {
  const result = await transcription();
  console.log(result);
  res.json(result);
};
