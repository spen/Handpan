import * as Tone from 'tone';

const handpanSampler = new Tone.Sampler(
    // Tone.sampler will find pitch between the sampled notes
    {
        F4: 'public/handpan/F4.wav',
        F3: 'public/handpan/F3.wav',
        F2: 'public/handpan/F2.wav',
    }
).toMaster();

export default handpanSampler;
