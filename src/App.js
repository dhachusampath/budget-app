<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1"
    />
    <meta
      name="description"
      content="BMV Groups - Premium hardware products and solutions"
    />
    <meta name="keywords" content="hardware, furniture, plywood, BMV Groups" />
    <meta name="author" content="Awaiken" />
    <title>BMV Groups - Products</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/slicknav.min.css" rel="stylesheet" />
    <link href="css/all.min.css" rel="stylesheet" />
    <link href="css/custom.css" rel="stylesheet" />
    <style>
      /* Product Category Sidebar */
      .product-category-sidebar {
        background: #000;
        padding: 30px 25px;
        border-radius: 10px;
        margin-bottom: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        min-height: 600px;
        position: relative;
        top: 10px !important;
        overflow: hidden;
        margin-top: 10px;
      }

      .product-category-sidebar h3 {
        color: #fff;
        font-size: 28px !important;
        margin-bottom: 25px;
        padding-bottom: 15px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
      }

      .product-category-sidebar ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 30px;
      }

      .product-category-sidebar ul li {
        margin-bottom: 12px;
        position: relative;
        transition: all 0.3s ease;
      }

      .product-category-sidebar ul li a {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        display: block;
        padding: 12px 15px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 6px;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
      }

      .product-category-sidebar ul li a:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(5px);
      }

      .product-category-sidebar ul li.active > a {
        color: #fff;
        background: rgb(158, 135, 8);
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
      }

      .product-category-sidebar .submenu {
        display: none;
        padding-left: 15px;
        margin-top: 10px;
        border-left: 2px solid rgba(255, 255, 255, 0.1);
      }

      .product-category-sidebar .submenu li {
        margin-bottom: 8px;
      }

      .product-category-sidebar .submenu li a {
        font-size: 16px;
        font-weight: 400;
        padding: 8px 15px;
        background: transparent !important;
      }

      .product-category-sidebar .submenu li a:hover {
        color: rgb(158, 135, 8);
        transform: translateX(3px);
      }

      .product-category-sidebar .submenu li.active a {
        color: rgb(158, 135, 8);
        font-weight: 500;
      }

      .product-category-sidebar .has-submenu > a:after {
        content: "\f078";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        color: rgba(255, 255, 255, 0.6);
      }

      .product-category-sidebar .has-submenu.active > a:after {
        transform: translateY(-50%) rotate(180deg);
        color: #fff;
      }

      .all-products-link a {
        color: #fff !important;
        font-weight: 600 !important;
        background: rgba(255, 255, 255, 0.1) !important;
      }

      .all-products-link.active a {
        background: rgb(158, 135, 8) !important;
        color: #fff !important;
      }

      /* Main Content Area */
      .product-category-title {
        font-size: 32px;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #eee;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 50px;
        margin-left: 20px;
      }

      /* Product Items */
      .product-item {
        margin-bottom: 30px;
        text-align: center;
        border: none;
        padding: 20px;
        border-radius: 10px;

        transition: all 0.4s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .product-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }

      .product-item img {
        max-width: 100%;
        height: 180px;
        object-fit: contain;
        margin-bottom: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .enquiry-footer {
        position: relative;
        align-items: center;
        text-align: center;
        margin-top: 100px;
      }

      .product-item:hover img {
        transform: scale(1.05);
      }

      .product-item .product-code {
        font-size: 18px;
        font-weight: 600;
        color: #2c3e50;
        margin-top: auto;
      }

      /* Layout Adjustments */
      .container {
        max-width: 1400px;
      }

      .row {
        margin-left: -10px;
        margin-right: -10px;
      }

      .col-lg-3,
      .col-lg-9,
      .col-md-4,
      .col-sm-6 {
        padding-left: 10px;
        padding-right: 10px;
      }

      /* Header Styles */
      .main-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
      }

      .navbar-brand img {
        height: auto;
        max-height: 40px;
      }

      .main-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
      }

      .nav-menu-wrapper {
        flex-grow: 1;
      }

      .navbar-nav {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-item {
        position: relative;
        margin: 0 10px;
      }

      .nav-link {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        padding: 10px 15px;
        display: block;
        transition: color 0.3s;
      }

      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #c7c7c7;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 5px 0;
        min-width: 250px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 1000;
      }

      .dropdown-item {
        display: block;
        padding: 6px 15px;
        color: #333;
        text-decoration: none;
        transition: all 0.3s;
        position: relative;
        background-color: transparent !important;
      }

      .dropdown-item:hover {
        background-color: #f0f0f0;
      }

      /* Enhanced Mega Menu Styles */
      .mega-menu {
        display: none;
        position: absolute;
        left: 0;
        width: 100%;
        background-color: #030303;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        padding: 15px;
        z-index: 1000;
        border-radius: 0 0 4px 4px;
      }

      .mega-menu-column {
        flex: 1;
        min-width: 200px;
        padding: 0 10px;
      }

      .mega-menu-column h4 {
        margin-bottom: 10px;
        color: green;
        background-color: #030303;
        font-size: 16px;
        padding-bottom: 5px;
        border-bottom: 1px solid #444;
      }

      /* Subcategory Styles */
      .subcategory {
        margin: 0;
        padding: 0;
        display: none;
      }

      .subcategory-toggle {
        position: relative;
        padding-right: 20px;
        cursor: pointer;
      }

      .subcategory-toggle::after {
        content: "▾";
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        transition: transform 0.3s;
      }

      .subcategory-toggle.active::after {
        transform: translateY(-50%) rotate(180deg);
      }

      .subcategory-item {
        display: block;
        color: #ddd;
        padding: 2px 10px !important;
        text-decoration: none;
        margin: 0 !important;
        line-height: 0.4 !important;
        font-size: 14px;
        transition: all 0.3s;
        background-color: transparent !important;
      }

      .subcategory-item:hover {
        padding-left: 8px;
      }

      /* Mobile Menu Styles */
      .navbar-toggle {
        display: none;
        cursor: pointer;
        font-size: 24px;
        background: none;
        border: none;
      }

      .responsive-menu {
        display: none;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 15px;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 999;
      }

      .responsive-menu.active {
        display: block;
      }

      .responsive-nav {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .responsive-nav .nav-item {
        margin: 5px 0;
      }

      .responsive-nav .dropdown-menu {
        position: static;
        display: none;
        box-shadow: none;
        padding-left: 15px;
        background-color: #f8f8f8;
      }

      .responsive-nav .dropdown.active .dropdown-menu {
        display: block;
      }

      /* Lightbox Styles */
      .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        justify-content: center;
        align-items: center;
      }

      .lightbox-content {
        max-width: 80%;
        max-height: 80%;
        width: auto;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        position: relative;
      }

      .lightbox-content img {
        max-width: 100%;
        height: 300px;
        display: block;
        margin: 0 auto;
      }

      .close-lightbox {
        position: absolute;
        top: 15px;
        right: 15px;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        background: #333;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        border: 2px solid white;
      }

      /* Responsive adjustments */
      @media (max-width: 767px) {
        .product-category-sidebar {
          margin-top: 20px;
          min-height: auto !important;
          padding: 20px 15px;
        }

        .product-category-sidebar h3 {
          font-size: 22px !important;
          margin-bottom: 15px;
        }

        .product-category-sidebar ul li a {
          padding: 10px 12px;
          font-size: 16px;
        }

        .product-category-title {
          margin-top: 30px;
          font-size: 24px;
          margin-left: 0;
          text-align: center;
        }

        .product-item {
          height: auto;
          padding: 15px;
        }

        .product-item img {
          height: 150px;
        }

        .navbar-toggle {
          display: block;
        }

        .main-menu {
          display: none;
        }
      }

      /* Tablet View (768px to 991px) */
      @media (min-width: 768px) and (max-width: 991px) {
        .product-category-sidebar {
          min-height: auto !important;
        }

        .product-category-title {
          margin-top: 30px;
          margin-left: 0;
        }

        .product-item {
          height: 250px;
        }
      }

      /* Desktop View (992px and up) */
      @media (min-width: 992px) {
        .product-category-sidebar {
          position: sticky;
          top: 100px;
          height: calc(100vh - 150px);
          overflow-y: auto;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown:hover .mega-menu {
          display: flex !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
      }
    </style>
  </head>
  <body>
    <!-- Preloader -->
    <div class="preloader">
      <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-icon">
          <img src="images/loader.png" alt="Loading" />
        </div>
      </div>
    </div>

    <!-- Header Section -->
    <header class="main-header">
      <div class="header-sticky">
        <nav class="container">
          <div class="navbar navbar-expand-lg">
            <!-- Logo Start -->
            <a class="navbar-brand" href="index.html">
              <img src="images/logo.svg" style="width: 170px" alt="Logo" />
            </a>
            <!-- Logo End -->

            <!-- Main Menu Start -->
            <div class="collapse navbar-collapse main-menu">
              <div class="nav-menu-wrapper">
                <ul class="navbar-nav mr-auto" id="menu">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">About Us</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="products.html"
                      id="productsDropdown"
                      role="button"
                    >
                      Products
                    </a>
                    <div class="dropdown-menu mega-menu">
                      <div class="mega-menu-column">
                        <h4>All Products</h4>
                        <a href="#" class="dropdown-item show-all-products"
                          >All Products</a
                        >

                        <a
                          class="dropdown-item subcategory-toggle furniture-hardware-toggle"
                          >Furniture Hardware</a
                        >
                        <div class="subcategory">
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="ss-hingles"
                            >SS Hinges</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="ss-brass-aldrops"
                            >SS & Brass Aldrops</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="tower-bolt"
                            >Tower Bolt</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="door-stopper"
                            >Door Stopper</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="ss-mortice-lock"
                            >SS Mortice Lock</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="zinc-mortice-lock"
                            >Zinc Mortice Lock</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="brass-mortice-lock"
                            >Brass Mortice Lock</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="telescopic-channel"
                            >Telescopic Channel</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="auto-hinges"
                            >Auto Hinges</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="bedlifter"
                            >Bed Lifter</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="kitchenbaskets"
                            >Kitchen Baskets</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="stainless-steel-screws"
                            >StainLess Steel</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="tandem-box"
                            >Tandem Box</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="hydraulic-pumps"
                            >Hydraulic Pumps</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="door-handles"
                            >Door Handlers</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="cupboard-handles"
                            >Cupboard Handles</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="door-closer"
                            >Door Closer</a
                          >
                        </div>
                        <a
                          href="#"
                          class="dropdown-item subcategory-toggle furniture-ply-toggle"
                          >Furniture Ply</a
                        >
                        <div class="subcategory">
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="shutter"
                            >Shuttering ply</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="bmw710"
                            >Bmw 710 ply</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="platinum"
                            >Bmw Platinum Ply</a
                          >
                          <a
                            href="#"
                            class="subcategory-item"
                            data-category="board"
                            >Bmw Platinum Board</a
                          >
                        </div>
                      </div>
                      <div class="mega-menu-column"></div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <!-- Header Btn Start -->
              <div class="header-btn d-inline-flex">
                <a href="" class="btn-default">get in touch</a>
              </div>
              <!-- Header Btn End -->
            </div>
            <!-- Main Menu End -->
            <button class="navbar-toggle"></button>
          </div>
        </nav>
        <div class="responsive-menu">
          <ul class="responsive-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="products.html"
                >Products</a
              >
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item show-all-products"
                  >All Products</a
                >
                <a
                  class="dropdown-item subcategory-toggle furniture-hardware-toggle"
                  >Furniture Hardware</a
                >
                <div class="subcategory">
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="ss-hingles"
                    >SS Hinges</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="ss-brass-aldrops"
                    >SS & Brass Aldrops</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="tower-bolt"
                    >Tower Bolt</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="door-stopper"
                    >Door Stopper</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="ss-mortice-lock"
                    >SS Mortice Lock</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="zinc-mortice-lock"
                    >Zinc Mortice Lock</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="brass-mortice-lock"
                    >Brass Mortice Lock</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="telescopic-channel"
                    >Telescopic Channel</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="auto-hinges"
                    >Auto Hinges</a
                  >
                  <a href="#" class="subcategory-item" data-category="bedlifter"
                    >Bed Lifter</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="kitchenbaskets"
                    >Kitchen Baskets</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="stainless-steel-screws"
                    >StainLess Steel</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="tandem-box"
                    >Tandem Box</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="hydraulic-pumps"
                    >Hydraulic Pumps</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="door-handles"
                    >Door Handlers</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="cupboard-handles"
                    >Cupboard Handles</a
                  >
                  <a
                    href="#"
                    class="subcategory-item"
                    data-category="door-closer"
                    >Door Closer</a
                  >
                </div>
                <a
                  href="#"
                  class="dropdown-item subcategory-toggle furniture-ply-toggle"
                  >Furniture Ply</a
                >
                <div class="subcategory">
                  <a href="#" class="subcategory-item" data-category="shutter"
                    >Shuttering ply</a
                  >
                  <a href="#" class="subcategory-item" data-category="bmw710"
                    >Bmw 710 ply</a
                  >
                  <a href="#" class="subcategory-item" data-category="platinum"
                    >Bmw Platinum Ply</a
                  >
                  <a href="#" class="subcategory-item" data-category="board"
                    >Bmw Platinum Board</a
                  >
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Page Header -->
    <div class="page-header parallaxie">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-header-box">
              <h1 class="text-anime-style-2" data-cursor="-opaque">Products</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Container -->
    <div class="lightbox" id="lightbox">
      <span class="close-lightbox">&times;</span>
      <div class="lightbox-content">
        <img id="lightbox-image" src="" alt="" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-lg-3">
          <div class="product-category-sidebar">
            <h3>Categories</h3>
            <ul>
              <li class="all-products-link active">
                <a href="#" id="show-all-products">All Products</a>
              </li>

              <li class="has-submenu">
                <a href="#" class="main-category" id="show-furniture-hardware"
                  >Furniture Hardware</a
                >
                <ul class="submenu">
                  <li>
                    <a
                      href="#"
                      data-category="brass-hingles"
                      id="show-furniture-hardware-"
                      >Brass Hingles</a
                    >
                  </li>
                  <li><a href="#" data-category="ss-hingles">SS Hingles</a></li>
                  <li>
                    <a href="#" data-category="ss-brass-aldrops"
                      >SS & Brass Aldrops</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="door-handles">Door Handles</a>
                  </li>
                  <li>
                    <a href="#" data-category="cupboard-handles"
                      >CupBoard Handles</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="door-closer">Door Closer</a>
                  </li>
                  <li><a href="#" data-category="tower-bolt">Tower Bolt</a></li>
                  <li>
                    <a href="#" data-category="door-stopper">Door Stopper</a>
                  </li>
                  <li>
                    <a href="#" data-category="ss-mortice-lock"
                      >SS Mortice Lock</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="zinc-mortice-lock"
                      >Zinc Mortice Lock</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="brass-mortice-lock"
                      >Brass Mortice Lock</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="telescopic-channel"
                      >Telescopic Channel</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="auto-hinges">Auto Hinges</a>
                  </li>
                  <li><a href="#" data-category="bedlifter">Bed Lifter</a></li>
                  <li>
                    <a href="#" data-category="kitchenbaskets"
                      >Kitchen Baskets</a
                    >
                  </li>
                  <li>
                    <a href="#" data-category="stainless-steel-screws"
                      >Stainless Steel Screws</a
                    >
                  </li>
                  <li><a href="#" data-category="tandem-box">Tandem Box</a></li>
                  <li>
                    <a href="#" data-category="hydraulic-pumps"
                      >Hydraulic Pumps</a
                    >
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#" class="main-category" id="show-furniture-ply"
                  >Furniture Ply and board</a
                >
                <ul class="submenu">
                  <li>
                    <a href="#" data-category="shutter">Shuttering Ply</a>
                  </li>
                  <li><a href="#" data-category="bmw710">BMW710 Ply</a></li>
                  <li>
                    <a href="#" data-category="platinum">BMW Platinum Ply</a>
                  </li>
                  <li>
                    <a href="#" data-category="board">BMW Platinum Board</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="col-lg-9">
          <h1 class="product-category-title">All Products</h1>
          <div class="row" id="products-container">
            <!-- Products will be loaded here dynamically -->
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-header">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="footer-logo">
                    <img
                      src="images/footer-logo.svg"
                      style="width: 180px"
                      alt="BMV Groups Logo"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="footer-social-links">
                    <div class="footer-social-link-title">
                      <h3>follow our socials</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-links">
              <h3>information</h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="products.html">Our Products</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-links">
              <h3>categories</h3>
              <ul>
                <li><a href="plywood.html">Furniture Plywood</a></li>
                <li><a href="shuttering-ply.html">Shuttering Plywood</a></li>
                <li>
                  <a href="hardware.html">Furniture Fittings & Hardware</a>
                </li>
                <li>
                  <a href="custom-solutions.html">Custom Cutting & Finishing</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-contact-box footer-links">
              <h3>contact us</h3>
              <div class="footer-contact-item">
                <div class="icon-box"><i class="fa-solid fa-phone"></i></div>
                <div class="footer-contact-content"><p>+91 9031567540</p></div>
              </div>
              <div class="footer-contact-item">
                <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
                <div class="footer-contact-content">
                  <p>bmvdecor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-latest-news footer-links">
              <h3>get the latest trending news</h3>
              <div class="footer-newsletter-form">
                <p>
                  Your Dream Space Starts Here Get Exclusive Design Straight
                  Your Inbox!
                </p>
                <form id="newslettersForm" action="#" method="POST">
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="mail"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="row">
            <div class="col-md-12">
              <div class="footer-copyright-text">
                <p>
                  Copyright © 2025 All Rights Reserved. Developed by
                  <a href="https://yatratechs.com/">Yatratechs</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- JavaScript Libraries -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/validator.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/function.js"></script>

    <!-- Product Page Script -->
    // Product Page Script
    <script>
      $(document).ready(function () {
        // Product data organized by categories
        const productDatabase = {
          "brass-hingles": [
            { code: "brass-hingles", image: "./images/gallery-1.jpg" },
          ],
          "ss-hingles": [
            {
              code: "SS Hingles",
              image: "https://m.media-amazon.com/images/I/71yV1O1650L.jpg",
            },
          ],
          "ss-brass-aldrops": [
            {
              code: "SS & Brass Aldrops",
              image:
                "https://5.imimg.com/data5/SELLER/Default/2021/12/QT/YC/JA/3033603/ss-aldrop.jpg",
            },
          ],
          "door-handles": [
            {
              code: "Door Handles",
              image:
                "https://m.media-amazon.com/images/I/81t3jEg2TfL._UF1000,1000_QL80_.jpg",
            },
          ],
          bedlifter: [
            {
              code: "Bed Lifter",
              image:
                "https://rukminim2.flixcart.com/image/850/1000/xif0q/furniture-accessory/0/7/n/hydraulic-pro-lift-bed-fitting-4-feet-bed-lift-3mm-17-inch-gas-original-imagrpmjzzhtsz7d.jpeg?q=20&crop=false",
            },
          ],
          "auto-hinges": [
            {
              code: "Auto Hinges",
              image: "https://m.media-amazon.com/images/I/61pkFP4HSbL.jpg",
            },
          ],
          kitchenbaskets: [
            {
              code: "Kitchen Baskets",
              image: "https://m.media-amazon.com/images/I/6129nhloUtL.jpg",
            },
          ],
          "stainless-steel-screws": [
            {
              code: "Stainless Steel Screws",
              image:
                "https://www.fastdep.in/images/product/ss-screw-allen-countersunk-head-m4x20mm_hu772d8d74b454a9b78c7a8aa2e89a31a1_410859_1000x1000_resize_q85_box.jpg",
            },
          ],
          "tandem-box": [
            {
              code: "Tandem Box",
              image:
                "https://sterlingwp.com/wp-content/uploads/2023/08/SS-MIRROR-TANDEM-BOX.jpg",
            },
          ],
          "door-stopper": [
            {
              code: "Door Stopper",
              image:
                "https://www.plantex.in/cdn/shop/files/91HsKpSdzaL.jpg?v=1730793469",
            },
          ],
          "ss-mortice-lock": [
            {
              code: "SS Mortice Lock",
              image:
                "https://5.imimg.com/data5/SELLER/Default/2021/12/GA/IC/IM/3033603/ss-mortice-lock.jpg",
            },
          ],
          "brass-mortice-lock": [
            {
              code: "Brass Mortice Lock",
              image:
                "https://5.imimg.com/data5/MJ/BF/YL/SELLER-11235474/brass-mortice-lock-12-inch-1-.jpeg",
            },
          ],
          "zinc-mortice-lock": [
            {
              code: "Zinc Mortice Lock",
              image: "https://m.media-amazon.com/images/I/71yV1O1650L.jpg",
            },
          ],
          "telescopic-channel": [
            {
              code: "Telescopic Channel",
              image: "https://cdn.moglix.com/p/FYqB9IxVMVNNu-xxlarge.jpg",
            },
          ],
          "cupboard-handles": [
            {
              code: "CupBoard Handles",
              image:
                "https://www.mantara.in/cdn/shop/files/gilded-t-bar-handle-m-a-n-t-a-r-a-1.webp?v=1751104605&width=1500",
            },
          ],
          "door-closer": [
            {
              code: "Door Closer",
              image:
                "https://m.media-amazon.com/images/I/61UBaUSDQRL._UF1000,1000_QL80_.jpg",
            },
          ],
          "tower-bolt": [
            {
              code: "Tower Bolt",
              image: "https://m.media-amazon.com/images/I/61VGw7UoDqL.jpg",
            },
          ],
          shutter: [{ code: "BMW Gold", image: "./images/bmwgold.jpg" }],
          bmw710: [{ code: "BMW710PLY", image: "./images/ply.jpg" }],
          platinum: [{ code: "BMW PLATINUMPLY", image: "./images/pl.jpg" }],
          board: [
            {
              code: "BMW PLATINUM BOARD",
              image: "./images/board.jpg",
            },
          ],
        };

        // Lightbox functionality
        const lightbox = {
          init: function () {
            this.element = document.getElementById("lightbox");
            this.image = document.getElementById("lightbox-image");
            this.closeBtn = document.querySelector(".close-lightbox");

            $(document).on("click", ".product-item img", this.open.bind(this));
            this.closeBtn.addEventListener("click", this.close.bind(this));
            this.element.addEventListener("click", (e) => {
              if (e.target === this.element) this.close();
            });
            document.addEventListener("keydown", (e) => {
              if (e.key === "Escape") this.close();
            });
          },
          open: function (e) {
            const imgSrc = $(e.target).attr("src");
            this.image.src = imgSrc;
            this.element.style.display = "flex";
            document.body.style.overflow = "hidden";
          },
          close: function () {
            this.element.style.display = "none";
            document.body.style.overflow = "auto";
          },
        };

        // Product Manager with unified menu functionality
        const productManager = {
          init: function () {
            this.container = $("#products-container");
            this.loadAllProducts();
            this.setupEventHandlers();
            lightbox.init();
            this.setupMobileMenu();
            this.checkStoredCategory();
          },

          setupMobileMenu: function () {
            // Mobile menu toggle
            $(".navbar-toggle").click(function () {
              $(".responsive-menu").toggleClass("active");
              $("body").toggleClass("mobile-menu-open");
            });

            // Mobile dropdown toggle
            $(document).on(
              "click",
              ".responsive-nav .dropdown-toggle",
              function (e) {
                e.preventDefault();
                $(this).parent().toggleClass("active");
                $(this).next(".dropdown-menu").slideToggle();
              }
            );

            // Mobile subcategory toggle
            $(document).on(
              "click",
              ".responsive-nav .subcategory-toggle",
              function (e) {
                e.preventDefault();
                $(this).toggleClass("active");
                $(this).next(".subcategory").slideToggle();
              }
            );

            // Close mobile menu when clicking outside
            $(document).on("click", function (e) {
              if (
                !$(e.target).closest(".responsive-menu").length &&
                !$(e.target).closest(".navbar-toggle").length &&
                $(".responsive-menu").hasClass("active")
              ) {
                $(".responsive-menu").removeClass("active");
                $("body").removeClass("mobile-menu-open");
              }
            });
          },

          setupEventHandlers: function () {
            // All Products links
            $(".show-all-products, #show-all-products").click((e) => {
              e.preventDefault();
              this.resetUI();
              this.loadAllProducts();
              this.closeMobileMenu();
              $(".has-submenu").removeClass("active");
              $(".submenu").hide();
            });

            // Main category clicks (desktop sidebar)
            $(".main-category").click((e) => {
              e.preventDefault();
              const $this = $(e.currentTarget);
              const category = $this.attr("id").replace("show-", "");

              // Toggle submenu visibility
              $this.parent().toggleClass("active");
              $this.next(".submenu").slideToggle();

              // Close other submenus
              $(".has-submenu").not($this.parent()).removeClass("active");
              $(".submenu").not($this.next(".submenu")).slideUp();
            });

            // Main category clicks (mobile menu)
            $(".furniture-hardware-toggle, .furniture-ply-toggle").click(
              (e) => {
                e.preventDefault();
                const $this = $(e.currentTarget);

                if ($this.hasClass("furniture-ply-toggle")) {
                  this.loadProductsByMainCategory("furniture-ply");
                  this.updateDisplay(
                    "furniture-ply",
                    "Furniture Ply and board"
                  );
                } else {
                  this.loadProductsByMainCategory("furniture-hardware");
                  this.updateDisplay(
                    "furniture-hardware",
                    "Furniture Hardware"
                  );
                }

                this.closeMobileMenu();
              }
            );

            // Subcategory clicks (both desktop and mobile)
            $(document).on("click", ".submenu a, .subcategory-item", (e) => {
              e.preventDefault();
              const $link = $(e.currentTarget);
              const category = $link.data("category");
              const categoryName = $link.text();

              this.loadProducts(category, categoryName);
              this.closeMobileMenu();
            });
          },

          closeMobileMenu: function () {
            $(".responsive-menu").removeClass("active");
            $("body").removeClass("mobile-menu-open");
            $(".responsive-nav .dropdown").removeClass("active");
            $(".responsive-nav .dropdown-menu").slideUp();
            $(".responsive-nav .subcategory").slideUp();
            $(".responsive-nav .subcategory-toggle").removeClass("active");
          },

          resetUI: function () {
            $(".product-category-title").text("All Products");
            $(".product-category-sidebar li").removeClass("active");
            $(".all-products-link").addClass("active");
            $(".has-submenu").removeClass("active");
            $(".submenu").slideUp();
          },

          updateDisplay: function (category, categoryName) {
            $(".product-category-title").text(categoryName);
            $(".product-category-sidebar li").removeClass("active");

            if (
              category === "furniture-ply" ||
              category === "furniture-hardware"
            ) {
              $(`#show-${category}`).parent().addClass("active");
              $(`#show-${category}`)
                .next(".submenu")
                .children()
                .removeClass("active");
            } else {
              $(`[data-category="${category}"]`)
                .parent()
                .addClass("active")
                .parents(".has-submenu")
                .addClass("active");

              // Open the parent submenu
              $(`[data-category="${category}"]`)
                .parents(".submenu")
                .slideDown()
                .prev("a")
                .parent(".has-submenu")
                .addClass("active");
            }

            $(".all-products-link").removeClass("active");
          },

          loadProducts: function (category, categoryName) {
            const products = productDatabase[category] || [];
            this.container.empty();

            if (products.length) {
              products.forEach((product) => {
                this.container.append(this.createProductCard(product));
              });
              this.updateDisplay(category, categoryName);
            } else {
              this.showNoProductsMessage();
            }
          },

          loadProductsByMainCategory: function (mainCategory) {
            const categoryMap = {
              "furniture-ply": ["shutter", "bmw710", "platinum", "board"],
              "furniture-hardware": [
                "brass-hingles",
                "ss-hingles",
                "ss-brass-aldrops",
                "door-handles",
                "cupboard-handles",
                "door-closer",
                "tower-bolt",
                "door-stopper",
                "ss-mortice-lock",
                "zinc-mortice-lock",
                "brass-mortice-lock",
                "telescopic-channel",
                "auto-hinges",
                "bedlifter",
                "kitchenbaskets",
                "stainless-steel-screws",
                "tandem-box",
                "hydraulic-pumps",
              ],
            };

            const allProducts = [];
            categoryMap[mainCategory].forEach((subCategory) => {
              if (productDatabase[subCategory]) {
                allProducts.push(...productDatabase[subCategory]);
              }
            });

            this.container.empty();
            if (allProducts.length) {
              allProducts.forEach((product) => {
                this.container.append(this.createProductCard(product));
              });
            } else {
              this.showNoProductsMessage();
            }
          },

          loadAllProducts: function () {
            const allProducts = [];
            Object.values(productDatabase).forEach((category) => {
              if (Array.isArray(category)) {
                allProducts.push(...category);
              }
            });

            this.container.empty();
            if (allProducts.length) {
              allProducts.forEach((product) => {
                this.container.append(this.createProductCard(product));
              });
            } else {
              this.showNoProductsMessage();
            }
          },

          createProductCard: function (product) {
            return `
                <div class="col-md-4 col-sm-6">
                    <div class="product-item">
                        <img src="${product.image}" alt="${product.code}" class="img-fluid">
                        <div class="product-code">${product.code}</div>
                    </div>
                </div>
            `;
          },

          showNoProductsMessage: function () {
            this.container.html(`
                <div class="col-12">
                    <div class="no-products">
                        <p>No products available in this category yet.</p>
                    </div>
                </div>
            `);
          },

          checkStoredCategory: function () {
            // Check for stored category on page load
            const storedCategory = sessionStorage.getItem("selectedCategory");

            if (storedCategory) {
              // Clear the stored category so it doesn't persist
              sessionStorage.removeItem("selectedCategory");

              // Load the appropriate category
              if (storedCategory === "furniture-hardware") {
                this.loadProductsByMainCategory("furniture-hardware");
                this.updateDisplay("furniture-hardware", "Furniture Hardware");
              } else if (storedCategory === "furniture-ply") {
                this.loadProductsByMainCategory("furniture-ply");
                this.updateDisplay("furniture-ply", "Furniture Ply");
              } else if (storedCategory === "all") {
                this.loadAllProducts();
                this.resetUI();
              } else {
                // Handle subcategories
                const categoryName = $(
                  `[data-category="${storedCategory}"]`
                ).text();
                this.loadProducts(storedCategory, categoryName);
              }
            }
          },
        };

        // Initialize everything
        productManager.init();

        // Handle window resize to maintain proper state
        $(window).on("resize", function () {
          if (window.innerWidth > 991) {
            // On desktop, ensure mobile menu is closed
            $(".responsive-menu").removeClass("active");
            $("body").removeClass("mobile-menu-open");
          }
        });
      });
    </script>
  </body>
</html>
