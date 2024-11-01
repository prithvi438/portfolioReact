import React from 'react'

const IntroSection = () => {
  return (
    <div>
<div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
  <div>
    
  </div>
      <div style={{
        width: '70%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        margin: '20px',
        padding: '20px',
        borderRadius: '12px',
      }}>

        <div style={{display: 'flex'}}>
        <div style={{
          borderRadius: '240px',
          backgroundColor: '#F8F9FA',
          height: '180px',
          width: '180px'
        }}>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  margin: '20px'}}>
          <p style={{fontSize: '26px', margin: '0'}}>Dr. Murari Mandal</p>
          <p style={{margin: '0', fontSize: '18px'}}>Assistant Professor, KIIT Bhubaneswar</p>
          <p style={{ margin: '0'}}>Post-Doc, National University of Singapore (NUS)</p>
          <p style={{ margin: '0', fontSize: '12', fontStyle: 'italic'}}>101-H, Campus 14 KIIT Bhubaneswar Odisha, India 751024</p>
        </div>
        </div>

        <div>
      <p style={{textAlign: 'center', color: '#C8CBCE', marginTop: '15px'}}>
      I am an Assistant Professor at the School of Computer Engineering, KIIT Bhubaneshwar. I lead the RespAI Lab where we work on the topics related to responsible AI, machine unlearning, data valuation, ethical use of large language models (LLMs) and diffusion models. My research work has been published in ICML, KDD, AAAI, ACM MM, CVPR. Check out my research group’s website here: RespAI Lab. I regularly serve as a Reviewer to NeurIPS, ICML, ICLR, AAAI, CVPR, ICCV, and ECCV. Indexed in CSRankings.
      </p>
      <p style={{textAlign: 'center', color: '#C8CBCE', marginTop: '15px'}}>
      Earlier, I was a Postdoctoral Research Fellow at National University of Singapore (NUS). I worked with Prof. Mohan Kankanhalli and Prof. Jussi Keppo in the School of Computing. Long time back, I graduated in 2011 with a Bachelors in Computer Science from BITS, Pilani.
      </p>
    </div>
      </div>

    </div>

    
    </div>
    
  )
}

export default IntroSection