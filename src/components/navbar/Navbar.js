import logo from './img/mobile_logo.jpg';
import './css/Navbar.css';

export default function Navbar(){
    return(
        <>
       
        <div class="nav" >
            {/* Mobile logo */}
            <a href='#'><img src={logo} alt='No_img' className='logo'/></a>
                <a href='#' className="box_a">
                <p className='since'>Since 1927</p>
                {/* logo box */}
                <div className='logo_box'>
                <p className='inline'> TRM </p> <span className='box_content'>THE REDTEL MOBILE</span>
                </div>
                <p className='down_content'>India's No.1 Used Mobile Company</p>
            </a>
        {/* instant button */}
            <a href='#' className='button_nav'> Get Instant Cash for Mobile</a>
            
       
        {/* Call icon */}

        <section class="call-buton"><a class="cc-calto-action-ripple" href="tel:9782998723"><i class="bi bi-telephone-fill"></i>
            <span className='phone_num'>97829 </span><span className='phone_num'>98723</span>
        </a>
        </section>

        {/* whatsapp */}
        <a href="https://wa.me/1234567890?text=hello+123" target='_blank' className="whatsapp-btn ">
            <i class="bi bi-whatsapp"></i>
        </a>
        <a href='https://wa.me/1234567890?text=hello+123' className='sell-mobile' target='_blank'>Sell Mobile</a>
       
        
        </div>
        <div className='mobile_view'>
        <a href='#'>Get Cash for Mobile </a> <span className='mobile_line'>|</span>  <span className='mobile_span'><a href='#'><i className='bi bi-telephone-fill'></i> 98765 4323 </a></span> 

        </div>
        
 
      

        </>
        
    )
}