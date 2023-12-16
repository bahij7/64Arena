import React from 'react';
import 'C:/CodeBoi/64arena/src/style.css';

function Faq(){


return(
    <div className="faq" id="faq">

   <div className="faq-body">

      <div className="faq-head">
         <h1><i className="fa-regular fa-comments"></i> FAQ</h1>
         <p>FAQs: Your Quick Answers to Common Questions. 📌💌</p>
      </div>

      <div className="faq-cards">

         <div className="card-top">
            <div className="first">
               <p className="question">What's 64 Community?</p>
               <p className="reponse">The 64 Community, led by young Moroccans, is committed to guiding individuals towards finding their joy and fulfillment through the wonderful game of football. ⚽✌</p>
            </div>
            <div className="second">
               <p className="question">What services do you provide?</p>
               <p className="reponse">We provide access to our 64 Arena, a top-tier football stadium, with three rental plans to choose from: One-Time Game Pass, Weekly Game Bundle, and Monthly Game Subscription. You can explore our plans and enjoy playing.💖👀</p>
             </div>
         </div>

         <div className="card-bottom">
            <div className="first">
               <p className="question">Are there any special offers for your grand opening?</p>
               <p className="reponse">Absolutely! We're offering a 20% discount for the first month on every plan. Additionally, there are exclusive surprises for the first visitors to step onto our pristine turf. There are even more exciting gifts and surprises waiting for you to discover when you visit. 😂🎁❤</p>
              </div>
            <div className="second">
               <p className="question">What are your opening hours?</p>
               <p className="reponse">We are open 24/7, every day of the week, with staff available from 7 AM to 10 PM to assist you.</p>
               </div>
         </div>
      </div>

   </div>

</div>
)
}

export default Faq;