import axios from 'axios';
const API = 'http://10.0.2.2:3001';

export const getTranscription = audio => {
  //console.log(audio);
  return axios
    .post(`http://10.0.2.2:3001/api/transcription`, audio)
    .then(res => {
      // console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
};
