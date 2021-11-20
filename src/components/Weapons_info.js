import React from 'react';
import weaponShop from '../components/img/weaponShop.jpg';
import pistals from '../components/img/pistals.jpg';

export default function Weaons_info() {
    return (
        <>
        <section id="header" className="">
        <div className="container-fluid nav-bg">
            <div className="row">
              <div className="col-10 mx-auto">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h5 style={{marginTop:"50px"}}>Buy weapons from   <strong style={{color:"blue", fontSize:"30px", fontFamily:"cursive"}}>Bandooks shop</strong></h5>
              <h5 style={{color:"green"}} className="my-3">
              we provide weapons with guarantee 
              
              </h5>
              <div className="mt-3">
              <button style={{borderRadius:"20px"}} type="button" class="btn btn-secondary">Get started</button><br/><br/>
              </div>
              
               </div>
               
              </div>
                          
                   <img  style={{width:"80%", height:"400px", marginLeft:"100px"}} src={weaponShop} alt="weaponShop"/>
             
            </div>
            </div>
        </section>
        <div style={{textAlign:"center"}}>
            
         <br/> <h6 style={{textAlign:"center", color:"red"}}>  ARMS AMMUNITION & REPAIRS</h6>
<strong style={{textAlign:"center", fontFamily:"cursive"}}> BANDOOKS SHOP</strong><br/>
<small>
We Bandooks shop are one of the most advanced and superior Gun Accessories Shop and Dealer in Rawlpindi and islamabad Pakistan.<br/>
As arms and technology is evolving day by day, we at Bandooks shop focuses on providing our customers with the best,<br/>
 new, and advanced Gun Accessories. We provide our customers with the ease to browse through our wide-ranged<br/>
 inventory of firearms, ammo, and accessories and always try to benefit our customers with our aggressive<br/>
  discount policies.</small>
            
        </div>
<hr/>

        <div className="container-fluid">
  <div className="row">
    <div style={{textAlign:"center", marginTop:"50px"}} className="col"><h4>
    Our wide variety of Guns, Ammunition, and Accessories includes advanced and cutting-edge handguns, rifles, 
    and shotguns. And when it comes to the upgradations of these firearms with the Best Gun Accessories that are 
    currently available in the market, we have got you covered. Our bonkers inventory of the Best Guns and Accessories
     in islamabad includes all types of new and improved ammunition and accessories for all your firearm needs.<br/> </h4>
     <h5>

     ہماری بندوقوں، گولہ بارود اور لوازمات کی وسیع اقسام میں جدید اور جدید ترین ہینڈگن، رائفلیں اور شاٹ گنز شامل ہیں۔ اور جب بات آتی ہے ان آتشیں اسلحے کی اپ گریڈیشن کے ساتھ بہترین بندوق کے لوازمات جو فی الحال مارکیٹ میں دستیاب ہیں، تو ہم نے آپ کو کور کر لیا ہے۔ اسلام آباد میں بہترین بندوقوں اور لوازمات کی ہماری بونکرز انوینٹری میں آپ کی تمام آتشیں اسلحہ کی ضروریات کے لیے ہر قسم کے نئے اور بہتر گولہ بارود اور لوازمات شامل ہیں۔
 </h5>
       </div>
    <div style={{marginTop:"30px"}}  className="col-6">
      <img className="container-fluid"  src={pistals} alt="pistals"/>
    </div>
   
  </div>
</div>
<hr/>
<h1 style={{textAlign:"center"}}>Our Guns</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <h2 style={{textAlign:"center"}}>PISTOLS      SHOT_GUNS       RIFELS</h2>
    </div>
   
  </div>
</div>
<hr/>
        </>
    )
}
