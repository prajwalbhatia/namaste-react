import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant container
 *    - Restaurants Card
 *    - Img
 *    - Name of res, star rating , cuisine , delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resArray = [
  {
    info: {
      id: "320466",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "lw2qh8xdarajdhuhubnc",
      locality: "GURUDWARA ROAD",
      areaName: "Rajpura",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gurudwara-road-rajpura-chandigarh-320466",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "441815",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "vtv5blaldlnundtxkawl",
      locality: "Banwari Market",
      areaName: "Rajpura",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-banwari-market-rajpura-chandigarh-441815",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "340378",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Prime Hub",
      areaName: "Rajpura",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Snacks", "Biryani"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-prime-hub-rajpura-chandigarh-340378",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "472693",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "G T Road",
      areaName: "Rajpura",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "2",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-g-t-road-rajpura-chandigarh-472693",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "816253",
      name: "Real Dhaba",
      cloudinaryImageId: "78e5dd5b5e203ab92c0f30ef8ae83acd",
      locality: "Rajpura",
      areaName: "Rajpura",
      costForTwo: "₹100 for two",
      cuisines: ["Burgers", "Snacks"],
      avgRating: 4,
      parentId: "486355",
      avgRatingString: "4.0",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/real-dhaba-rajpura-chandigarh-816253",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "816246",
      name: "A-1 Dhaba",
      cloudinaryImageId: "83c81326c5587c2f89d7a3247b06f144",
      locality: "Rajpura",
      areaName: "Rajpura",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks", "Chinese"],
      avgRating: 3.8,
      parentId: "486350",
      avgRatingString: "3.8",
      totalRatingsString: "5",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a-1-dhaba-rajpura-chandigarh-816246",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "430660",
      name: "DARA VAISHNO DHABA",
      cloudinaryImageId: "wjb3kzfwyiba8cdeoj08",
      locality: "Rajpura",
      areaName: "Rajpura Bypass",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Indian", "Fast Food", "Snacks"],
      avgRating: 4.2,
      veg: true,
      parentId: "259742",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dara-vaishno-dhaba-rajpura-rajpura-bypass-chandigarh-430660",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "807986",
      name: "Pizza Time",
      cloudinaryImageId: "e6bf1547d55e5f3f145ad4b4c358926a",
      locality: "7apunjabicolony",
      areaName: "Rajpura",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Burgers"],
      parentId: "724",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-time-7apunjabicolony-rajpura-chandigarh-807986",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "427363",
      name: "Hansu Ji Puri Wale",
      cloudinaryImageId: "httikr83kn2kvfmvitgp",
      locality: "Rajpura",
      areaName: "Rajpura Town",
      costForTwo: "₹150 for two",
      cuisines: ["Thalis"],
      avgRating: 4.4,
      veg: true,
      parentId: "237841",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hansu-ji-puri-wale-rajpura-rajpura-town-chandigarh-427363",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "109603",
      name: "Patiala Lassi",
      cloudinaryImageId: "qfvqy1kwy1pjdqhwjbu2",
      locality: "Rajpura Town",
      areaName: "Rajpura",
      costForTwo: "₹99 for two",
      cuisines: ["Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "156293",
      avgRatingString: "4.5",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/patiala-lassi-town-rajpura-chandigarh-109603",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "679047",
      name: "Burger Bar",
      cloudinaryImageId: "dafbbff4d939235674ae91d00dd498fc",
      locality: "Punjabi Colony",
      areaName: "Rajpura",
      costForTwo: "₹100 for two",
      cuisines: ["Burgers", "Snacks"],
      avgRating: 3.3,
      veg: true,
      parentId: "51188",
      avgRatingString: "3.3",
      totalRatingsString: "7",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-bar-punjabi-colony-rajpura-chandigarh-679047",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492707",
      name: "Tasty Bites",
      cloudinaryImageId: "ev3j6m5xb0o6k5nijzwg",
      locality: "7A Punjabi Colony",
      areaName: "Rajpura",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Snacks", "Chaat"],
      avgRating: 3.6,
      veg: true,
      parentId: "2745",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/tasty-bites-7a-punjabi-colony-rajpura-chandigarh-492707",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "705582",
      name: "Yolo",
      cloudinaryImageId: "f81b86a87d6ca87e95ca9c32611cd718",
      locality: "Kanika Garden",
      areaName: "Rajpura",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Snacks"],
      avgRating: 3.9,
      parentId: "228172",
      avgRatingString: "3.9",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/yolo-kanika-garden-rajpura-chandigarh-705582",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "533900",
      name: "Shreejee Kitchen",
      cloudinaryImageId: "n2qs6u51umyup8excnmc",
      locality: "Dalima Vihar",
      areaName: "Rajpura",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 2.3,
      veg: true,
      parentId: "15036",
      avgRatingString: "2.3",
      totalRatingsString: "4",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/shreejee-kitchen-dalima-vihar-rajpura-chandigarh-533900",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492680",
      name: "Burger Time",
      cloudinaryImageId: "gnbj9cdk6llznsqvlnu7",
      locality: "7A Punjabi Colony",
      areaName: "Rajpura",
      costForTwo: "₹250 for two",
      cuisines: ["American"],
      avgRating: 3.8,
      veg: true,
      parentId: "51469",
      avgRatingString: "3.8",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-3d3c7bd2-7f31-4d45-b2e9-3873ee53793c",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-time-7a-punjabi-colony-rajpura-chandigarh-492680",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div  className="res-card">
      <img
        className="res-logo"
        alt="food-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resArray?.map((resData) => (
          <RestaurantCard key={resData?.info?.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
