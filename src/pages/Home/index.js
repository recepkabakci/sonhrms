import React from "react";



export default function Index() {
  return (
    <div class="bg-info"style={{"height" : "100%", "width" : "100%"}}>
<html lang="en">    
    <body class="bg-info">
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container text-center">
                <a class="navbar-brand" href="home">VYSR HUMAN RESOURCES COMPANY</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="profile">My Profile</a></li>
                        <li class="nav-item"><a class="nav-link" href="data">USERS</a></li>
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="d" role="button" data-bs-toggle="dropdown" aria-expanded="false">MENU</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-warning  text-center" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="login">Login</a></li>
                                <li><a class="dropdown-item" href="logout">Logout</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
        <div class="container ">
            <div class="text-center mt-5">
                <h1>WELCOME TO THE BEST HUMAN RESOURCES COMPANY</h1>
                <h2 class="lead">Burada Herşey Gerçek!</h2>
            </div>
        </div> 
    </body>
    <footer class="site-footer bg-info text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6 className="text-center">About</h6>
            <p class="text-center">İşletmenizde kurumsal ve bireysel gelişimi destekleyen, ihtiyaçlarınıza göre yapılandırılabilen, iş gücü yönetiminin tüm aşamalarını kapsayan ‘tam size göre’  çözümler sunuyoruz.
VYSR HRM ürünü, esnek ve istikrarlı bir altyapıya sahip, sektör ve büyüklük bağımsız her işletmenin insan kaynakları süreçlerini dijitalleştirebileceği web tabanlı bir platformdur. Tüm İK süreçlerinizi mobil ve web ortamında yalın ve çevik anlayışla yönetebilirsiniz.VYSR HRM İnsan Kaynakları Yönetimi Global İK trendlerini destekleyen uygulama yapısıyla;

Tamamı online işleyen zaman ve bordro yönetimi,
Performans değerlendirme süreci ile ilişkilendirilebilir eğitim yönetimi,
Entegre iş değerleme ve ücret yönetimi,
Performans/potansiyel diyagramlarıyla yetenek yönetimi
ve daha birçok süreci kapsar.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Social Media</h6>
            <ul class="footer-links">            
            <li><a href="http://facebook.com">Facebook</a></li>         
            <li><a href="http://linkedin.com">Linkedin</a></li>
            <li><a href="http://twitter.com">Twitter</a></li> 
            <li><a href="http://youtube.com">Youtube</a></li>        
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>     
      </div>
      <div class="container">
        <div className="row">
          

          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text text-center">Copyright &copy; 2022 All Rights Reserved VYSR Human Resources Company 
            </p>
          </div>
        </div>
      </div>
</footer>
</html>
</div>

  );
}
