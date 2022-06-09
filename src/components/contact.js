import React from "react";

const Contact = () =>{
  return (
   <section id="contact" class="section pb-0">

        <div class="container">
            <h6 class="xs-font mb-0">Culpa perferendis excepturi.</h6>
            <h3 class="section-title mb-5">Contact Us</h3>

            <div class="row align-items-center justify-content-between">
                <div class="col-md-8 col-lg-7">

                    <form class="contact-form" method="post" action="https://mailthis.to/siddiq.dev@mail.com">
                        <div class="form-row">
                            <div class="col form-group">
                                <input type="text" class="form-control" placeholder="Name" ></input>
                            </div>
                            <div class="col form-group">
                                <input type="email" class="form-control" placeholder="Email "></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Your Message"></textarea>
                        </div>
                        <input type="hidden" name="_subject" value="Contact form submitted"></input>
    <input type="hidden" name="_after" value="https://myhomepage.net/"></input>
    <input type="hidden" name="_honeypot" value=""></input>
    <input type="hidden" name="_confirmation" value=""></input>

                        <div class="form-group">
                            <input type="submit" class="btn btn-primary btn-block" value="Send Message"></input>
                        </div>
                    </form>
                </div>
                <div class="col-md-4 d-none d-md-block order-1">
                    <ul class="list">
                        <li class="list-head">
                            <h6>CONTACT INFO</h6>
                        </li>
                        <li class="list-body">
                            <p class="py-2">Contact us and we'll get back to you within 24 hours.</p>
                            <p class="py-2"><i class="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                            <p class="py-2"><i class="ti-email"></i>  info@website.com</p>
                            <p class="py-2"><i class="ti-microphone"></i> (123) 456-7890</p>

                        </li>
                    </ul> 
                </div>
            </div>

            
        </div>
    </section>

  );
}


export default Contact;
 