import React from 'react';
import './contact.css';
const Contact = () => {
   
    return (
    <React.Fragment>
        <section class="mb-4">
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
<div class="row">
    <div class="col-md-9 mb-md-0 mb-5 form">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            
            <div class="row">
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Full Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Full Name"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="email" class="">Email</label>
                        <input type="text" id="email" name="email" class="form-control" placeholder="Email"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control subject" placeholder="Subject"/>
                    </div>
                </div>
            </div>

            <div class="row">
               
                <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Message</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
                    </div>

                </div>
            </div>
           
        </form>

        <div class="text-center text-md-left filtersection">
            <a class="btn btn-primary send" href= "" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>

</div>

</section>
     </React.Fragment>
)}

export default Contact;