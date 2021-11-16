<div class="navbar">
		<a href="index.php"<?php if ($activePage=="index") { print("class= 'active'");} ?>><i class="fa fa-fw fa-home"></i> Home</a>
		<a href="about.php"><i class="fa fa-fw fa-info"></i> About</a>
		<div class="links">
            <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <div class="dropdown">
                <a href="Email.php"><i class="fa fa-envelope"></i> Email</a>
                <a href="Phone.php"><i class="fa fa-phone"></i> Phone</a>
                <a href="Address.php"><i class="fa fa-map-marker"></i> Address</a>
            </div>
        </div>
		<a href="products.php"<?php if ($activePage=="products") { print("class= 'active'");} ?>><i class="fa fa-fw fa-shopping-basket"></i> Products</a>
		<a href="productsGR.php"> <i class="fa fa-language"></i> <img src="include/images/FlagofGreece.png"class="imgsize" alt="GR"></a>
		<a href="register.php"><i class="fa fa-sign-in"></i></a>
	</div>