import React from 'react';
import 'C:/CodeBoi/64arena/src/style.css';

function Feedback(){
    return(
<div className="feedbacks">
            <div className="feedbacks-head">
               <div className="feedbacks-text">
               <h1><i className="fa-solid fa-quote-right"></i> Feedbacks</h1>
               <p>Explore the thoughts and experiences of our cherished clients in their feedback. ✨💕</p>
               </div>
               <div className="feedbacks-decoration"><i className="fa-solid fa-chevron-down"></i></div>
            </div>

            <div className="feedbacks-body">
               <div className="feedbacks-top">

                  <div className="feedbacks-section">
                     <div className="client">Ahmed Bahij</div>
                     <p>"A very Good Service, You Guys are making a Proccess Keep going and Thanks 👍"</p>
                     <div className="date">7 Jan 24</div>
                   </div>
                  

               </div>


               <div className="feedbacks-middle">
                  <div className="feedbacks-section">
                     <div className="client">Nour Bahij</div>
                     <p>"keep Going Dad, i Love You ❤"</p>
                     <div className="date">19 Oct 23</div>
                   </div>

                   <div className="feedbacks-section">
                     <div className="client">Brahim Qabol</div>
                     <p>"Bravo Drari 👏"</p>
                     <div className="date">3 Feb 24</div>
                   </div>
               </div>

               <div className="feedbacks-bottom">
                  <div className="feedbacks-section">
                     <div className="client">Brahim Sbiti</div>
                     <p>"Wa3rin Adrari, Allah y3tikom Sa7a, Organisation 10/10 👏🔥"</p>
                     <div className="date">1 Feb 24</div>
                   </div>
                  <div className="feedbacks-section">
                     <div className="client">Nouh Bahij</div>
                     <p>"Perfect f'kolshi ✨👀 "</p>
                     <div className="date">17 Jan 24</div>
                   </div>
               </div>

            </div>

         </div>
    )
}

export default Feedback;