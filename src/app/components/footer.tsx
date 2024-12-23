function Footer() {
  return (
    <footer className="bg-blue-600  text-white">
      <div className=" flex justify-evenly pt-4 pb-12">
      <div >
        <h2 className="text-3xl">
          {" "}
          <strong>Sana Mart</strong>
        </h2>
        <div>
          <br />
          <ul>
            <li>
              <strong>Contact Us</strong>
            </li>
            <br />
            <li>
              <strong>Visit:</strong> <br />
              www.sanamart.com.pk
            </li>
            <br />
            <li>
              <strong>Call Us:</strong>
              <br /> 1234-12345678
            </li>
          </ul>
        
          </div>
      </div>
      <div className="pt-16 pb-4 ">
            <h2 className="underline"><strong>Furniture</strong></h2>
        
        <br />
        <ul>
            <li>Bed</li>
            <li>Mattress</li>
            <li>Cup boards

            </li>
            <li>Lamps</li>
            <li>Sofa set</li>
            <li>Dressing</li>
        </ul>
        </div>
        <div className="pt-16 pb-4 ">
            <h2><strong className="underline">Electronics</strong></h2>
        
        <br />
        <ul>
            <li>Mobiles</li>
            <li>Computers</li>
            <li>Laptops

            </li>
            <li>Juicer</li>
            <li>Blender</li>
            <li>Chopper</li>
        </ul>
        </div>
        <div className="pt-16 pb-4 ">
            <h2><strong className="underline">Frozen Items</strong></h2>
        
        <br />
        <ul>
            <li>Fish</li>
            <li>Nuggets</li>
            <li>Kabab

            </li>
            <li>Kofte</li>
            <li>Dawn Paratha</li>
            <li>Cheese</li>
        </ul>
        </div>
        </div>
        <hr />
        
    </footer>
  );
}

export default Footer;
