export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  isVeg: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
}

export interface MenuSubcategory {
  name: string;
  items: MenuItem[];
}

export interface MenuMetaCategory {
  id: string;
  name: string;
  subcategories: MenuSubcategory[];
}

export const menuCategories: MenuMetaCategory[] = [
  {
    "id": "signatures",
    "name": "Bae's Signatures",
    "subcategories": [
      {
        "name": "Bae's Chef Specials",
        "items": [
          {
            "name": "Bae's Chicken Guns & Roses",
            "description": "Delicious continental appetizer made with flavorful, marinated chicken strips wrapped in a crispy batter and deep-fried.",
            "price": 329,
            "isVeg": false,
            "isSignature": true,
            "isSpicy": true
          },
          {
            "name": "Bae's Chicken Roulade",
            "description": "Crispy thin-sliced chicken breast pounded with a savory filling of herbs, cheese & vegetables.",
            "price": 349,
            "isVeg": false,
            "isSignature": true
          },
          {
            "name": "Bae's Potlam Biryani (Non-Veg)",
            "description": "Popular Andhra Pradesh dish featuring mutton, chicken, and prawns cooked in a fragrant masala with basmati rice, wrapped in an omelette.",
            "price": 489,
            "isVeg": false,
            "isSignature": true,
            "isSpicy": true
          },
          {
            "name": "Bae's Potlam Biryani (Veg)",
            "description": "A delicious vegetarian version of our signature Potlam Biryani featuring paneer and mixed vegetables.",
            "price": 359,
            "isVeg": true,
            "isSignature": true
          },
          {
            "name": "Non-Veg Tandoori Platter",
            "description": "A culinary delight featuring a variety of tandoor-cooked chicken kebabs, fish tikka, and prawns, accompanied by flavorful dips.",
            "price": 559,
            "isVeg": false,
            "isSignature": true
          },
          {
            "name": "Veg Tandoori Platter",
            "description": "Assorted tandoor-cooked paneer tikka, stuffed mushrooms, and veg seekh kebabs served with mint chutney.",
            "price": 429,
            "isVeg": true,
            "isSignature": true
          },
          {
            "name": "Chicken Cooker Pulao",
            "description": "Fragrant basmati rice cooked under pressure with aromatic whole spices, herbs, and tender chicken.",
            "price": 359,
            "isVeg": false,
            "isSignature": true
          },
          {
            "name": "Veg Cooker Pulao",
            "description": "Fragrant basmati rice cooked with fresh seasonal vegetables and aromatic spices.",
            "price": 249,
            "isVeg": true,
            "isSignature": true
          }
        ]
      }
    ]
  },
  {
    "id": "starters",
    "name": "Soups & Starters",
    "subcategories": [
      {
        "name": "Soups",
        "items": [
          {
            "name": "Hot & Sour Soup (Veg)",
            "description": "Refreshing soup with chili peppers, garlic, and ginger.",
            "price": 149,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Sweet Corn Soup (Veg)",
            "description": "Comforting soup with sweet corn, cream, and seasonings.",
            "price": 149,
            "isVeg": true
          },
          {
            "name": "Manchow Soup (Veg)",
            "description": "Soup made with cornstarch, chili peppers, veggies, and broth served with crispy noodles.",
            "price": 149,
            "isVeg": true
          },
          {
            "name": "Lemon Coriander Soup (Veg)",
            "description": "Soup with a base of vegetable broth, lemon juice, and fresh coriander.",
            "price": 149,
            "isVeg": true
          },
          {
            "name": "Spicy Soup (Veg)",
            "description": "Flavorful broth with a notable kick of spiciness.",
            "price": 149,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Mongolian Soup (Veg)",
            "description": "Clear soup with visible vegetables and mild Mongolian spices.",
            "price": 159,
            "isVeg": true
          },
          {
            "name": "Clear Soup (Veg)",
            "description": "Clear broth soup made with fresh garden vegetables and herbs.",
            "price": 149,
            "isVeg": true
          },
          {
            "name": "Talumein Soup (Veg)",
            "description": "Noodle soup made with vegetables, mushrooms, and light soy broth.",
            "price": 159,
            "isVeg": true
          },
          {
            "name": "Hot & Sour Soup (Non-Veg)",
            "description": "Refreshing soup with chicken, chili peppers, garlic, and ginger.",
            "price": 169,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Sweet Corn Soup (Non-Veg)",
            "description": "Comforting soup with shredded chicken, sweet corn, cream, and seasonings.",
            "price": 169,
            "isVeg": false
          },
          {
            "name": "Manchow Soup (Non-Veg)",
            "description": "Spicy Indo-Chinese chicken soup served with crispy fried noodles.",
            "price": 169,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Lemon Coriander Soup (Non-Veg)",
            "description": "Soup with a base of chicken broth, chicken bits, lemon juice, and coriander.",
            "price": 169,
            "isVeg": false
          },
          {
            "name": "Spicy Soup (Non-Veg)",
            "description": "Flavorful chicken broth with a notable kick of spiciness.",
            "price": 169,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mongolian Soup (Non-Veg)",
            "description": "Clear soup with chicken, egg drops, vegetables, and spices.",
            "price": 179,
            "isVeg": false
          },
          {
            "name": "Tom Yum Soup",
            "description": "Spicy Thai soup made with prawn, kaffir lime leaves, chili peppers, and fish sauce.",
            "price": 189,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Clear Soup (Non-Veg)",
            "description": "Clear broth soup made with chicken pieces and light herbs.",
            "price": 169,
            "isVeg": false
          },
          {
            "name": "Talumein Soup (Non-Veg)",
            "description": "Noodle soup made with chicken, mushrooms, and light soy broth.",
            "price": 179,
            "isVeg": false
          },
          {
            "name": "Cream of Broccoli Soup",
            "description": "Creamy soup with a rich blend of broccoli, milk, and secret spices.",
            "price": 159,
            "isVeg": true
          },
          {
            "name": "Tomato Basil Soup",
            "description": "Classic soup made with a fresh tomato blend, aromatic basil, and spices.",
            "price": 159,
            "isVeg": true
          },
          {
            "name": "Cream of Chicken Soup",
            "description": "Rich, creamy soup with chicken chunks, milk, and mild spices.",
            "price": 169,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Continental Veg Appetizers",
        "items": [
          {
            "name": "Plain Garlic Bread (5 Pcs)",
            "description": "Classic appetizer made with fresh bread, garlic butter, and herbs.",
            "price": 129,
            "isVeg": true
          },
          {
            "name": "Cheese Garlic Bread (4 Pcs)",
            "description": "Our classic garlic bread topped with a generous amount of melted cheese.",
            "price": 169,
            "isVeg": true
          },
          {
            "name": "Chilli Cheese Toast (4 Pcs)",
            "description": "A delicious and cheesy toast made with bread, chilli sauce, and melted cheese.",
            "price": 169,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Cheesy Shots (8 Pcs)",
            "description": "Crispy potato balls filled with a gooey cheese center.",
            "price": 199,
            "isVeg": true
          },
          {
            "name": "Bruschetta (4 Pcs)",
            "description": "Classic Italian toasted bread topped with diced tomatoes, garlic, basil, and olive oil.",
            "price": 179,
            "isVeg": true
          },
          {
            "name": "Cheesy Jalapeno Bruschetta",
            "description": "Spicy toasted bread topped with tomatoes, garlic, jalape\u00f1os, and melted cheese.",
            "price": 219,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "French Fries",
            "description": "Crispy golden brown fries made with premium potatoes.",
            "price": 169,
            "isVeg": true
          },
          {
            "name": "Peri Peri Fries",
            "description": "Crispy golden brown fries tossed in a fiery peri-peri spice blend.",
            "price": 199,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Roasted Garlic Cheesy Fries",
            "description": "Crispy fries topped with melted cheese and roasted garlic.",
            "price": 229,
            "isVeg": true
          },
          {
            "name": "Veg Fingers (8 Pcs)",
            "description": "Crispy fried vegetable fingers made with a blend of mixed vegetables.",
            "price": 159,
            "isVeg": true
          },
          {
            "name": "Bae's Veg Mexican Cups",
            "description": "Crispy tortilla cups filled with spicy vegetables, beans, and cheese.",
            "price": 229,
            "isVeg": true,
            "isSpicy": true
          }
        ]
      },
      {
        "name": "Continental Non-Veg Appetizers",
        "items": [
          {
            "name": "Chicken Bruschetta",
            "description": "Toasted bread topped with tomatoes, garlic, basil, olive oil, and grilled chicken.",
            "price": 219,
            "isVeg": false
          },
          {
            "name": "Fish Fingers with Tartar Sauce (5 Pcs)",
            "description": "Crispy golden brown fish fingers coated in a seasoned breadcrumb batter.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Chicken Lollipops (5 Pcs)",
            "description": "Crispy chicken drumsticks marinated in a blend of spices and herbs, then deep-fried.",
            "price": 269,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Hot Wings (5 Pcs)",
            "description": "Crispy chicken wings coated in a spicy and flavorful tandoori-style sauce.",
            "price": 259,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Popcorn",
            "description": "Bite-sized pieces of seasoned chicken breaded and fried to perfection.",
            "price": 239,
            "isVeg": false
          },
          {
            "name": "Chicken Nuggets (8 Pcs)",
            "description": "Bite-sized pieces of chicken breaded and fried, served with dipping sauce.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Crispy Fried Chicken (5 Pcs)",
            "description": "Tender and juicy chicken pieces coated in a seasoned batter and fried crispy.",
            "price": 329,
            "isVeg": false
          },
          {
            "name": "Guns & Roses (4 Pcs)",
            "description": "Fried crispy thread-like chicken strips marinated in a continental batter.",
            "price": 259,
            "isVeg": false
          },
          {
            "name": "Barbeque Wings",
            "description": "Flavorful chicken wings grilled and slathered in signature barbecue sauce.",
            "price": 349,
            "isVeg": false
          },
          {
            "name": "Chicken Roulade",
            "description": "Crispy thin-sliced chicken breast pounded with a filling of herbs and cheese.",
            "price": 259,
            "isVeg": false
          },
          {
            "name": "Macaroni Chicken",
            "description": "Classic comfort dish made with macaroni, shredded chicken, and melted cheese.",
            "price": 319,
            "isVeg": false
          },
          {
            "name": "Hot Buffalo Wings",
            "description": "Crispy and juicy chicken wings tossed in a tangy and fiery Buffalo sauce.",
            "price": 329,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Fish 'n' Chips",
            "description": "Perfectly fried batter-coated fish served with golden French fries.",
            "price": 329,
            "isVeg": false
          },
          {
            "name": "Grilled Chicken with Demi-Glace Sauce",
            "description": "Tender and juicy grilled chicken breast topped with a rich brown demi-glace.",
            "price": 339,
            "isVeg": false
          },
          {
            "name": "Grilled Fish with Lemon Butter Sauce",
            "description": "Perfectly grilled fish fillet served with a tangy and creamy lemon butter sauce.",
            "price": 349,
            "isVeg": false
          },
          {
            "name": "Grilled Prawn with Brown Creamy Sauce",
            "description": "Grilled prawns tossed in a rich, velvety brown cream sauce.",
            "price": 349,
            "isVeg": false
          },
          {
            "name": "Grilled Prawn with Butter Garlic Sauce",
            "description": "Grilled prawns tossed in a buttery, garlicky sauce with fresh herbs.",
            "price": 339,
            "isVeg": false
          },
          {
            "name": "Bae's Chicken Mexican Cups",
            "description": "Crispy cups loaded with spicy shredded chicken and mixed veggies.",
            "price": 219,
            "isVeg": false,
            "isSpicy": true
          }
        ]
      },
      {
        "name": "Chinese Veg Starters",
        "items": [
          {
            "name": "Crispy Corn",
            "description": "Golden fried corn kernels tossed with spices, onions, and capsicum.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "Crispy Mushroom",
            "description": "Delicious button mushrooms coated in a light batter and fried crispy.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Chilli Paneer",
            "description": "Soft paneer cubes coated in a spicy, tangy, and flavorful Chinese soy-chilli gravy.",
            "price": 299,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Paneer 65",
            "description": "Spicy, deep-fried paneer cubes tempered with curry leaves and green chillies.",
            "price": 299,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Mushroom 65",
            "description": "Deep-fried spicy mushrooms coated in a traditional red 65 batter.",
            "price": 279,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Crispy Vegetables",
            "description": "Assorted fresh vegetables batter-fried and tossed in schezwan sauce.",
            "price": 259,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Chilli Potato",
            "description": "Fried potato fingers tossed in a sweet, spicy, and sour chilli sauce.",
            "price": 229,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Veg Manchuria",
            "description": "Crispy fried vegetable balls tossed in a savory and spicy soy-based sauce.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Mushroom Manchuria",
            "description": "Crispy fried mushroom chunks tossed in a classic tangy manchurian sauce.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Baby Corn Manchuria",
            "description": "Crispy baby corn pieces tossed in a flavorful manchurian sauce.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Veg Spring Rolls",
            "description": "Crispy rolls stuffed with finely chopped seasoned vegetables.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Sesame Gobi Dry",
            "description": "Crispy cauliflower florets tossed in sesame seeds and sweet-spicy sauce.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Mushroom Garlic Pepper",
            "description": "Crispy fried mushrooms tossed with crushed black pepper and golden garlic.",
            "price": 249,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Paneer Majestic",
            "description": "Soft paneer strips cooked in a creamy, spicy yoghurt-based yellow sauce.",
            "price": 309,
            "isVeg": true
          },
          {
            "name": "Dragon Paneer",
            "description": "Crispy paneer cubes tossed in a fiery, sweet-and-spicy red sauce.",
            "price": 309,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Chilli Babycorn",
            "description": "Tender baby corn stir-fried with onions, capsicum, and green chillies.",
            "price": 269,
            "isVeg": true,
            "isSpicy": true
          }
        ]
      },
      {
        "name": "Chinese Non-Veg Starters",
        "items": [
          {
            "name": "Chilli Egg",
            "description": "Boiled eggs tossed in a spicy, tangy Indo-Chinese sauce.",
            "price": 249,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Schezwan Egg",
            "description": "Boiled eggs tossed in a fiery, homemade Schezwan sauce.",
            "price": 249,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Egg 65",
            "description": "Boiled egg chunks coated in spicy batter and deep-fried.",
            "price": 249,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chilli Chicken",
            "description": "Classic Chinese starter with chicken cubes in a spicy soy-chilli glaze.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Dragon Chicken",
            "description": "Tender chicken strips tossed in a rich, sweet, and fiery red sauce.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Lollipop",
            "description": "Crispy chicken drummettes marinated in spices and deep-fried.",
            "price": 379,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Drumstick",
            "description": "Crispy chicken drumsticks tossed in a spicy ginger-garlic sauce.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Chicken Majestic",
            "description": "Dry chicken starter cooked in a rich yoghurt and yellow spice sauce.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Chicken 65",
            "description": "Spicy, deep-fried chicken cubes tempered with curry leaves.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Schezwan Chicken",
            "description": "Chicken pieces tossed in a fiery, flavorful Schezwan pepper sauce.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Kaju Chicken Roast",
            "description": "Delicious pan-fried chicken loaded with roasted cashew nuts.",
            "price": 379,
            "isVeg": false
          },
          {
            "name": "Pepper Chicken",
            "description": "Dry chicken starter tossed with freshly crushed black pepper and onions.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Manchuria",
            "description": "Tender chicken chunks tossed in a dark soy and garlic sauce.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Chicken Spring Roll",
            "description": "Crispy rolls stuffed with spiced chicken and vegetables.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Chilli Loose Prawns",
            "description": "Crispy batter-fried prawns tossed in garlic, ginger, and green chillies.",
            "price": 389,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Apollo Fish",
            "description": "Spiced fish fillets tossed in a yoghurt, curry leaf, and green chilli sauce.",
            "price": 379,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Schezwan Fish",
            "description": "Fish fillets stir-fried in a fiery hot Schezwan sauce.",
            "price": 379,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chilli Fish",
            "description": "Fish chunks tossed with bell peppers and green chillies in soy sauce.",
            "price": 379,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Lemon Chicken",
            "description": "Batter-fried chicken pieces tossed in a tangy and sweet lemon sauce.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Pepper Chicken Drumstick",
            "description": "Tender chicken drumsticks coated in a heavy black pepper seasoning.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chilli Chicken Winglets",
            "description": "Crispy chicken winglets tossed in an aromatic chilli paste.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Ginger Chicken",
            "description": "Stir-fried chicken tossed in a dominant fresh ginger and garlic sauce.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Garlic Fish",
            "description": "Pan-fried fish fillets tossed in a rich, buttery garlic sauce.",
            "price": 379,
            "isVeg": false
          },
          {
            "name": "Phuket Fish",
            "description": "Exotic crispy fried fish fillets tossed with aromatic Thai herbs.",
            "price": 419,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chilli Mustard Prawn",
            "description": "Prawns cooked in a unique blend of hot mustard and green chillies.",
            "price": 389,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Ginger Prawn",
            "description": "Prawns stir-fried in a hot ginger and spring onion sauce.",
            "price": 389,
            "isVeg": false
          },
          {
            "name": "BBQ Prawn",
            "description": "Juicy prawns tossed in a smoky and sweet BBQ sauce glaze.",
            "price": 399,
            "isVeg": false
          },
          {
            "name": "Shanghai Prawn",
            "description": "Prawns tossed in a sweet and spicy Shanghai red sauce.",
            "price": 399,
            "isVeg": false,
            "isSpicy": true
          }
        ]
      }
    ]
  },
  {
    "id": "mains-indian",
    "name": "Mains (Indian)",
    "subcategories": [
      {
        "name": "Biryanis",
        "items": [
          {
            "name": "Bae's Potlam Biryani (Non-Veg)",
            "description": "Mutton, chicken, and prawns cooked with basmati rice, wrapped in a thin omelette.",
            "price": 489,
            "isVeg": false,
            "isSignature": true,
            "isSpicy": true
          },
          {
            "name": "Bae's Potlam Biryani (Veg)",
            "description": "Vegetarian version of our signature Potlam Biryani with paneer and vegetables.",
            "price": 359,
            "isVeg": true,
            "isSignature": true
          },
          {
            "name": "Chicken Dum Biryani",
            "description": "Traditional Hyderabadi style slow-cooked chicken dum biryani.",
            "price": 319,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Fried Biryani",
            "description": "Aromatic basmati rice served with rich, spicy fried chicken pieces.",
            "price": 339,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Mughlai Biryani",
            "description": "Rich, mildly spiced chicken biryani with an egg-infused creamy gravy layer.",
            "price": 409,
            "isVeg": false
          },
          {
            "name": "Chicken Avakai Biryani",
            "description": "Biryani cooked with spicy and tangy Andhra mango pickle (avakai) flavor.",
            "price": 409,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Ulava Charu Biryani",
            "description": "Biryani flavored with traditional Andhra horse gram soup (ulava charu).",
            "price": 409,
            "isVeg": false
          },
          {
            "name": "Mutton Fry Biryani",
            "description": "Basmati rice served with delicious ghee-roasted spicy mutton fry.",
            "price": 449,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Keema Biryani",
            "description": "Aromatic basmati rice cooked with spiced minced mutton (keema).",
            "price": 469,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Prawn Biryani",
            "description": "Fragrant rice cooked with spiced prawns and aromatic herbs.",
            "price": 389,
            "isVeg": false
          },
          {
            "name": "Gongura Chicken Biryani",
            "description": "Tangy Andhra style biryani cooked with chicken and gongura (sorrel leaves) paste.",
            "price": 349,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Gongura Prawns Biryani",
            "description": "Andhra style biryani featuring fresh prawns cooked with sour sorrel leaves.",
            "price": 409,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Gongura Mutton Biryani",
            "description": "Spicy and tangy biryani with tender mutton chunks cooked in gongura spices.",
            "price": 459,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mixed Non-Veg Biryani",
            "description": "Premium biryani loaded with chicken, mutton, and prawns.",
            "price": 469,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Tandoori Murgh Biryani",
            "description": "Biryani served with half a smoky tandoori chicken cooked in the clay oven.",
            "price": 409,
            "isVeg": false
          },
          {
            "name": "Chicken Tikka Biryani",
            "description": "Aromatic rice served with boneless tandoori chicken tikka pieces.",
            "price": 409,
            "isVeg": false
          },
          {
            "name": "Chicken Kalmi Biryani",
            "description": "Biryani served with juicy, marinated chicken kalmi kebabs.",
            "price": 429,
            "isVeg": false
          },
          {
            "name": "Avakai Chicken Tikka Biryani",
            "description": "Spicy mango pickle flavored biryani with charred chicken tikka.",
            "price": 409,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Veg Biryani",
            "description": "Aromatic rice slow-cooked with fresh garden vegetables and spices.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "Paneer Biryani",
            "description": "Fragrant basmati rice cooked with soft, spiced cottage cheese (paneer) cubes.",
            "price": 289,
            "isVeg": true
          },
          {
            "name": "Mushroom Biryani",
            "description": "Biryani cooked with button mushrooms and aromatic whole spices.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Ulava Charu Veg Biryani",
            "description": "Vegetarian biryani cooked in rich horse gram broth.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Avakaya Veg Biryani",
            "description": "Andhra mango pickle spiced vegetarian biryani.",
            "price": 279,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Gongura Veg Biryani",
            "description": "Tangy and sour sorrel leaf spiced vegetable biryani.",
            "price": 279,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Egg Biryani",
            "description": "Basmati rice cooked with spices and served with hard-boiled eggs.",
            "price": 269,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Pulaos & Roasts",
        "items": [
          {
            "name": "Chicken Cooker Pulao",
            "description": "Fragrant basmati rice pressure-cooked with whole spices and tender chicken.",
            "price": 359,
            "isVeg": false,
            "isSignature": true
          },
          {
            "name": "Veg Cooker Pulao",
            "description": "Basmati rice cooked in a pressure cooker with vegetables and whole spices.",
            "price": 249,
            "isVeg": true,
            "isSignature": true
          },
          {
            "name": "Chicken Pulao",
            "description": "Mildly spiced traditional pulao rice cooked with chicken pieces.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Keema Pulao (Chicken)",
            "description": "Fragrant rice cooked with spiced minced chicken.",
            "price": 409,
            "isVeg": false
          },
          {
            "name": "Keema Pulao (Mutton)",
            "description": "Fragrant rice cooked with spiced minced mutton.",
            "price": 479,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Prawn Pulao",
            "description": "Aromatic pulao rice cooked with seasoned fresh prawns.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Prawn Keema Pulao",
            "description": "Fragrant rice cooked with finely chopped spiced prawns.",
            "price": 399,
            "isVeg": false
          },
          {
            "name": "Mutton Ghee Roast Pulao",
            "description": "Fragrant pulao served with tender mutton slow-roasted in pure ghee.",
            "price": 409,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Kodi Ghee Roast Pulao",
            "description": "Pulao rice served with traditional chicken ghee roast.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Kodi Vepudu",
            "description": "Andhra-style dry chicken fry cooked with spices and cashew nuts.",
            "price": "379 / 449",
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Karampodi Royyala Vepudu",
            "description": "Prawns fried with a special spicy Andhra lentil powder (karampodi).",
            "price": 389,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mutton Miriyalu Vepudu",
            "description": "Spicy Andhra style mutton fry loaded with fresh black pepper.",
            "price": 439,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Rayalaseema Vepudu",
            "description": "Very spicy dry chicken fry from the Rayalaseema region.",
            "price": 409,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Veg Pulao",
            "description": "Light and fragrant pulao rice cooked with mixed vegetables.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Green Peas Pulao",
            "description": "Basmati rice cooked with fresh green peas and mild spices.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Paneer Pulao",
            "description": "Pulao rice loaded with soft paneer cubes.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Kaju Pulao",
            "description": "Premium basmati rice loaded with fried cashew nuts.",
            "price": 299,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Indian Curries (Veg)",
        "items": [
          {
            "name": "Dal Tadka",
            "description": "Yellow lentils cooked with onions, tomatoes, and tempered with cumin and garlic.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Aloo Matar",
            "description": "Comforting curry made with potatoes and green peas in a spiced tomato gravy.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Palak Dal",
            "description": "Lentils cooked with fresh spinach leaves and tempered with mild spices.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Green Peas Masala",
            "description": "Green peas cooked in a rich, onion-tomato gravy with Indian spices.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Mixed Veg Curry",
            "description": "Assorted vegetables cooked in a semi-dry spiced gravy.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "Veg Kadai",
            "description": "Mixed vegetables cooked in a spicy kadai masala with bell peppers.",
            "price": 259,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Veg Kolhapuri",
            "description": "Spicy mixed vegetable curry from Kolhapur prepared with dry coconut.",
            "price": 269,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Palak Paneer",
            "description": "Paneer cubes cooked in a smooth, creamy spinach gravy.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Kadai Paneer",
            "description": "Paneer cooked with freshly ground coriander and red chillies in a kadai.",
            "price": 299,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Paneer Butter Masala",
            "description": "Cottage cheese cooked in a rich, creamy, and mildly sweet tomato butter gravy.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Paneer Chatpata",
            "description": "Spicy and tangy paneer curry cooked with pickles and spices.",
            "price": 299,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Mushroom Masala",
            "description": "Fresh button mushrooms cooked in a semi-dry masala gravy.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Babycorn Masala",
            "description": "Baby corn pieces cooked in an aromatic tomato-based gravy.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Mushroom Tomato Curry",
            "description": "Button mushrooms cooked with fresh tangy tomato gravy.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Kaju Tomato Curry",
            "description": "Fried cashew nuts cooked in a rich, tangy tomato-based gravy.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Kaju Paneer Curry",
            "description": "Rich curry combining fried cashews and paneer in a creamy sauce.",
            "price": 309,
            "isVeg": true
          },
          {
            "name": "Dhingri Dolma",
            "description": "Mughlai dish combining paneer and mushrooms in a rich, dry gravy.",
            "price": 309,
            "isVeg": true
          },
          {
            "name": "Paneer Pasanda",
            "description": "Rich sandwich-style paneer blocks stuffed with nuts and cooked in cream gravy.",
            "price": 329,
            "isVeg": true
          },
          {
            "name": "Paneer Lajawab",
            "description": "Chef's special paneer curry with a luxurious yellow creamy gravy.",
            "price": 319,
            "isVeg": true
          },
          {
            "name": "Sabji Satrangi",
            "description": "Healthy curry made with seven varieties of fresh seasonal vegetables.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Veg Hariyali",
            "description": "Mixed vegetables cooked in a refreshing green gravy of spinach and mint.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Gobhi Shimla Mirch",
            "description": "Dry dish combining cauliflower and bell peppers with basic Indian spices.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Keema Sabji (Veg)",
            "description": "Minced soya chunks cooked like a traditional keema with green peas.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "Diwani Handi",
            "description": "Mixed vegetables cooked in a handi with a rich cashew-spinach gravy.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Methi Chaman",
            "description": "Kashmiri dish featuring paneer in a thick gravy flavored with fresh fenugreek.",
            "price": 289,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Indian Curries (Non-Veg & Egg)",
        "items": [
          {
            "name": "Egg Bhurji",
            "description": "Scrambled eggs cooked with onions, green chillies, and spices.",
            "price": 189,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Egg Masala",
            "description": "Boiled eggs cooked in a spicy tomato-onion gravy.",
            "price": 199,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Gongura Chicken Curry",
            "description": "Tender chicken cooked with tangy sorrel leaves and spices.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Andhra Chicken Curry",
            "description": "Traditional spicy chicken curry made with coconut and regional spices.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Masala",
            "description": "Chicken pieces cooked in a classic spiced onion-tomato gravy.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Kadai Chicken",
            "description": "Chicken cooked with bell peppers and onion in a spicy kadai masala.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Kolhapuri",
            "description": "Spicy chicken dish prepared with dry red chillies and coconut.",
            "price": 389,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mutton Curry",
            "description": "Tender mutton pieces cooked in a slow-simmered rich Indian gravy.",
            "price": 469,
            "isVeg": false
          },
          {
            "name": "Mutton Keema Curry",
            "description": "Spicy minced mutton cooked with onions, tomatoes, and peas.",
            "price": 489,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mutton Gongura",
            "description": "Mutton cooked with tangy and sour sorrel leaves in Andhra style.",
            "price": 469,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mutton Fry",
            "description": "Dry mutton pieces fried with heavy spices and curry leaves.",
            "price": 469,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mutton Masala",
            "description": "Mutton cooked in a thick gravy of spices and tomatoes.",
            "price": 469,
            "isVeg": false
          },
          {
            "name": "Prawn Masala",
            "description": "Fresh prawns cooked in a spicy onion-tomato gravy.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Fish Curry",
            "description": "Tamarind-based tangy and spicy traditional fish curry.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Fish Masala",
            "description": "Fish fillets cooked in a thick spiced onion gravy.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Fish Fry (Indian style)",
            "description": "Pan-fried fish fillets coated with Indian red spice paste.",
            "price": 439,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Methi Chicken Curry",
            "description": "Chicken cooked with fresh fenugreek leaves in a rich gravy.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Hyderabadi Chicken Curry",
            "description": "Rich chicken curry cooked with mint, coriander, and yoghurt.",
            "price": 349,
            "isVeg": false
          },
          {
            "name": "Butter Chicken",
            "description": "Smoky tandoori chicken cooked in a rich, buttery, creamy tomato sauce.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Chicken Tikka Masala",
            "description": "Charred chicken tikka pieces cooked in a spicy gravy.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Badami Murgh Curry",
            "description": "Rich Mughlai chicken cooked in a creamy almond paste gravy.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Mughlai Chicken Curry",
            "description": "Mildly sweet chicken curry cooked with egg white ribbons and cream.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Mutton Rogan Josh",
            "description": "Classic Kashmiri mutton dish cooked in a thin red spicy gravy.",
            "price": 479,
            "isVeg": false
          },
          {
            "name": "Prawn Do Pyaza",
            "description": "Prawns cooked with double quantity of onions in a sweet-spicy gravy.",
            "price": 469,
            "isVeg": false
          },
          {
            "name": "Kalmi Masala",
            "description": "Juicy chicken drumsticks cooked in a special masala gravy.",
            "price": 389,
            "isVeg": false
          },
          {
            "name": "Konasema Kodi Kura",
            "description": "Spicy coconut-based chicken curry from Konasema region.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Ghost Kaliya",
            "description": "Mutton cooked in a unique green gravy of spinach, herbs, and spices.",
            "price": 469,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Tandoori Kebabs & Platters",
        "items": [
          {
            "name": "Tandoori Chicken (Half)",
            "description": "Bone-in chicken marinated in yoghurt and spices, roasted in the tandoor.",
            "price": 319,
            "isVeg": false
          },
          {
            "name": "Tandoori Chicken (Full)",
            "description": "Full bone-in chicken marinated and roasted in the clay tandoor.",
            "price": 519,
            "isVeg": false
          },
          {
            "name": "Murgh Malai Kabab",
            "description": "Chicken pieces marinated in cream, cheese, and cardamom, grilled to perfection.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Murgh Hariyali Kabab",
            "description": "Chicken marinated in a fresh green paste of mint and coriander.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Chicken Garlic Kabab",
            "description": "Chicken kebabs infused with strong roasted garlic flavors.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Chicken Tikka",
            "description": "Classic boneless chicken pieces marinated in red spices and tandoor-charred.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Kalmi Kabab (4 Pcs)",
            "description": "Juicy chicken drumsticks marinated in rich spices and roasted.",
            "price": 399,
            "isVeg": false
          },
          {
            "name": "Ajwaini Fish Tikka",
            "description": "Fish cubes marinated in carom seeds (ajwain) and spices, tandoor grilled.",
            "price": 389,
            "isVeg": false
          },
          {
            "name": "Tandoori Prawn",
            "description": "Jumbo prawns marinated in red spices and skewered in tandoor.",
            "price": 389,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Malai Fish Tikka",
            "description": "Fish fillets marinated in a mild cream and cheese mixture and grilled.",
            "price": 389,
            "isVeg": false
          },
          {
            "name": "Murgh Afghani Kabab",
            "description": "Mild and rich chicken kebabs marinated in cashew paste and cream.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Cheese Murgh Kabab",
            "description": "Tender chicken kebabs loaded with melted cheese on top.",
            "price": 379,
            "isVeg": false
          },
          {
            "name": "Tandoori Non-Veg Grilled Platter",
            "description": "Chef's special platter containing chicken kebabs, fish tikka, and prawns.",
            "price": 559,
            "isVeg": false,
            "isSignature": true
          },
          {
            "name": "Paneer Tikka",
            "description": "Cottage cheese blocks marinated in red spices and grilled with onion and peppers.",
            "price": 309,
            "isVeg": true
          },
          {
            "name": "Malai Paneer Tikka",
            "description": "Paneer marinated in cream, cheese, and cardamom.",
            "price": 329,
            "isVeg": true
          },
          {
            "name": "Achari Paneer Tikka",
            "description": "Paneer tikka flavored with tangy Indian pickle spices.",
            "price": 319,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Hara Bhara Kabab",
            "description": "Deep-fried patties made with spinach, green peas, and potatoes.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Veg Seekh Kabab",
            "description": "Skewered minced vegetable kebabs cooked in the tandoor.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Pudina Paneer Tikka",
            "description": "Paneer tikka marinated in a refreshing mint and herb paste.",
            "price": 309,
            "isVeg": true
          },
          {
            "name": "Tandoori Stuffed Mushroom",
            "description": "Mushroom caps stuffed with cheese and spices, roasted in tandoor.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Cheese Paneer Tikka",
            "description": "Paneer tikka loaded with gooey cheese.",
            "price": 319,
            "isVeg": true
          },
          {
            "name": "Chatpata Paneer Tikka",
            "description": "Spicy and tangy marinated paneer tikka.",
            "price": 309,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Chatpata Tandoori Mushroom",
            "description": "Spicy and sour marinated mushrooms skewered and grilled.",
            "price": 309,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Tandoori Veg Hot Platter",
            "description": "Assorted veg starters like paneer tikka, stuffed mushroom, and veg seekh.",
            "price": 429,
            "isVeg": true,
            "isSignature": true
          }
        ]
      },
      {
        "name": "Indian Breads",
        "items": [
          {
            "name": "Tandoori Roti (Plain)",
            "description": "Whole wheat bread baked in tandoor.",
            "price": 45,
            "isVeg": true
          },
          {
            "name": "Tandoori Roti (Butter)",
            "description": "Whole wheat tandoori bread coated with butter.",
            "price": 55,
            "isVeg": true
          },
          {
            "name": "Naan (Plain)",
            "description": "Traditional refined flour flatbread baked in tandoor.",
            "price": 55,
            "isVeg": true
          },
          {
            "name": "Naan (Butter)",
            "description": "Tandoori naan coated with rich butter.",
            "price": 69,
            "isVeg": true
          },
          {
            "name": "Naan (Chilli Garlic)",
            "description": "Tandoori naan topped with chopped garlic and green chillies.",
            "price": 79,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Naan (Cheese)",
            "description": "Tandoori naan stuffed with cheese.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Kulcha (Plain)",
            "description": "Soft, leavened flatbread.",
            "price": 79,
            "isVeg": true
          },
          {
            "name": "Kulcha (Paneer)",
            "description": "Soft flatbread stuffed with spiced paneer.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Kulcha (Stuffed)",
            "description": "Soft flatbread stuffed with spiced mixed vegetables.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Lacha Paratha",
            "description": "Layered tandoori whole wheat bread.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Pudina Paratha",
            "description": "Layered whole wheat bread topped with mint powder.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Aloo Paratha",
            "description": "Whole wheat bread stuffed with spiced potato mash.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Methi Paratha",
            "description": "Whole wheat bread flavored with fresh fenugreek leaves.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Tawa Aloo Paratha",
            "description": "Griddle-cooked whole wheat flatbread stuffed with spicy potatoes.",
            "price": 89,
            "isVeg": true
          },
          {
            "name": "Paneer Paratha (Tawa)",
            "description": "Griddle-cooked flatbread stuffed with grated spiced paneer.",
            "price": 89,
            "isVeg": true
          }
        ]
      }
    ]
  },
  {
    "id": "mains-global",
    "name": "Mains (Global)",
    "subcategories": [
      {
        "name": "Pizzas (Veg)",
        "items": [
          {
            "name": "Tri Cheese Pizza",
            "description": "Rich blend of mozzarella, cheddar, and processed cheese on a crispy base.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Homestead Pizza",
            "description": "Fresh garden pizza loaded with olives, mushrooms, corn, and bell peppers.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Margherita Pizza",
            "description": "Classic pizza with rich tomato sauce, fresh basil, and mozzarella cheese.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Exotica Pizza (Veg)",
            "description": "Loaded with exotic vegetables like jalapenos, baby corn, olives, and bell peppers.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Peri Peri Express Pizza (Veg)",
            "description": "Spicy pizza topped with peri-peri seasoned vegetables.",
            "price": 269,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Tandoori Pizza (Veg)",
            "description": "Topped with marinated paneer tikka chunks, red onions, and green chillies.",
            "price": 339,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Hawaiian Pizza (Veg)",
            "description": "Pineapple chunks, sweet corn, and bell peppers topped with cheese.",
            "price": 339,
            "isVeg": true
          },
          {
            "name": "Rustica Pizza",
            "description": "Rustic pizza with sun-dried tomatoes, olives, onions, and fresh basil.",
            "price": 339,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Pizzas (Non-Veg)",
        "items": [
          {
            "name": "Peri Peri Express Pizza (Non-Veg)",
            "description": "Spicy pizza topped with juicy peri-peri marinated chicken and bell peppers.",
            "price": 329,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Exotica Pizza (Non-Veg)",
            "description": "Topped with grilled chicken, sausages, olives, and jalapenos.",
            "price": 299,
            "isVeg": false
          },
          {
            "name": "Tandoori Chicken Pizza",
            "description": "Topped with smoky tandoori chicken chunks, red onion, and green chillies.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Sea Heaven Pizza",
            "description": "Premium seafood pizza loaded with seasoned prawns and fish chunks.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Hawaiian Pizza (Non-Veg)",
            "description": "Classic combination of chicken salami, pineapple chunks, and cheese.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Chicken Salami Pizza",
            "description": "Topped with spicy chicken salami slices and extra mozzarella.",
            "price": 339,
            "isVeg": false
          },
          {
            "name": "Chicken Keema Pizza",
            "description": "Unique pizza topped with Indian spiced minced chicken and onions.",
            "price": 339,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Best of Both Worlds Pizza",
            "description": "Loaded with half chicken and half seafood toppings.",
            "price": 369,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Pastas",
        "items": [
          {
            "name": "Penne Alfredo (Veg)",
            "description": "Classic Italian pasta tossed in a rich, creamy butter and Parmesan sauce.",
            "price": 319,
            "isVeg": true
          },
          {
            "name": "Penne Arrabbiata (Veg)",
            "description": "Penne pasta in a spicy tomato sauce cooked with garlic and red chilli flakes.",
            "price": 309,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Basil Pesto Pasta (Veg)",
            "description": "Penne tossed in a fragrant, vibrant basil pesto sauce and olive oil.",
            "price": 329,
            "isVeg": true
          },
          {
            "name": "Mix/Pink Sauce Pasta (Veg)",
            "description": "Combination of tangy tomato marinara and creamy alfredo sauce.",
            "price": 339,
            "isVeg": true
          },
          {
            "name": "Spinach Aglio Olio (Veg)",
            "description": "Spaghetti pasta tossed with garlic, olive oil, red chilli flakes, and fresh spinach.",
            "price": 339,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Mushroom Garlic Spaghetti (Veg)",
            "description": "Spaghetti tossed with garlic, olive oil, and fresh mushrooms.",
            "price": 329,
            "isVeg": true
          },
          {
            "name": "Penne Alfredo (Chicken)",
            "description": "Alfredo pasta loaded with warm, juicy grilled chicken breast chunks.",
            "price": 359,
            "isVeg": false
          },
          {
            "name": "Penne Arrabbiata (Chicken)",
            "description": "Arrabbiata pasta loaded with spicy grilled chicken pieces.",
            "price": 349,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Basil Pesto Pasta (Chicken)",
            "description": "Pesto pasta loaded with tender grilled chicken breast chunks.",
            "price": 369,
            "isVeg": false
          },
          {
            "name": "Mix/Pink Sauce Pasta (Chicken)",
            "description": "Pink sauce pasta loaded with seasoned grilled chicken.",
            "price": 379,
            "isVeg": false
          },
          {
            "name": "Spinach Aglio Olio (Chicken)",
            "description": "Aglio olio spaghetti cooked with spinach and grilled chicken.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Aglio Olio",
            "description": "Classic spaghetti tossed with garlic, olive oil, chilli flakes, and chicken.",
            "price": 369,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mushroom Garlic Spaghetti (Chicken)",
            "description": "Mushroom spaghetti topped with seasoned chicken breast slices.",
            "price": 349,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Burgers & Sandwiches",
        "items": [
          {
            "name": "Veg Classic Burger",
            "description": "Served with a crispy vegetable patty, lettuce, tomato, and mayo.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Crunchy Paneer Burger",
            "description": "Crispy batter-fried paneer block patty with spicy burger sauce.",
            "price": 269,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Healthy Veg Coleslaw Burger",
            "description": "Soft burger bun stuffed with a fresh, creamy coleslaw mix.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "BBQ Chicken Burger",
            "description": "Juicy grilled chicken patty smothered in rich BBQ sauce.",
            "price": 279,
            "isVeg": false
          },
          {
            "name": "Jalapeno Cheesy Chicken Burger",
            "description": "Chicken burger loaded with jalape\u00f1os and melted cheese sauce.",
            "price": 269,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Grilled Fish Burger",
            "description": "Juicy grilled fish fillet with tartar sauce in a burger bun.",
            "price": 279,
            "isVeg": false
          },
          {
            "name": "Bae's Club Sandwich (Veg)",
            "description": "Triple-decker sandwich loaded with cheese, cucumber, tomato, and lettuce.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Veg Grilled Sandwich",
            "description": "Grilled sandwich stuffed with seasoned mixed vegetables and cheese.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Veg Classic Sandwich",
            "description": "Simple sandwich filled with sliced cucumber, tomato, and butter.",
            "price": 229,
            "isVeg": true
          },
          {
            "name": "Grilled Paneer Sandwich",
            "description": "Grilled sandwich filled with spiced paneer and mint chutney.",
            "price": 249,
            "isVeg": true
          },
          {
            "name": "Cream Cheese Veg Sandwich",
            "description": "Filled with a mixture of cream cheese, bell peppers, and herbs.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Pesto Mix Veg Sandwich",
            "description": "Filled with vegetables tossed in rich basil pesto sauce.",
            "price": 239,
            "isVeg": true
          },
          {
            "name": "Bae's Club Sandwich (Non-Veg)",
            "description": "Triple-decker sandwich loaded with chicken, egg, cheese, and salad.",
            "price": 349,
            "isVeg": false
          },
          {
            "name": "Chicken Keema Sandwich",
            "description": "Stuffed with flavorful minced chicken masala.",
            "price": 329,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mexican Chicken Sandwich",
            "description": "Filled with Mexican-spiced chicken, sweet corn, and salsa.",
            "price": 269,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Fried Chicken Sandwich",
            "description": "Stuffed with a crispy fried chicken strip and mayonnaise.",
            "price": 249,
            "isVeg": false
          },
          {
            "name": "Cream Cheese Non Veg Sandwich",
            "description": "Filled with chicken, cream cheese, and black pepper.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Pesto Mix Non Veg Sandwich",
            "description": "Filled with shredded chicken tossed in basil pesto.",
            "price": 269,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Chinese Mains (Rice & Noodles)",
        "items": [
          {
            "name": "Veg Fried Rice",
            "description": "Classic stir-fried rice loaded with finely chopped vegetables.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "Veg Schezwan Fried Rice",
            "description": "Spicy fried rice tossed in fiery Schezwan sauce with veggies.",
            "price": 269,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Mushroom Fried Rice",
            "description": "Fried rice cooked with button mushrooms and light soy sauce.",
            "price": 289,
            "isVeg": true
          },
          {
            "name": "Paneer Fried Rice",
            "description": "Stir-fried rice loaded with paneer cubes and vegetables.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Mix Veg Fried Rice",
            "description": "Fried rice loaded with paneer, mushrooms, and sweet corn.",
            "price": 369,
            "isVeg": true
          },
          {
            "name": "Corn Pepper Fried Rice",
            "description": "Fried rice loaded with sweet corn and fresh crushed black pepper.",
            "price": 369,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Burnt Garlic Fried Rice (Veg)",
            "description": "Fried rice with a dominant fragrant burnt garlic and green onion flavor.",
            "price": 279,
            "isVeg": true
          },
          {
            "name": "Kimchi Fried Rice (Veg)",
            "description": "Korean style fried rice tossed with spicy kimchi cabbage.",
            "price": 289,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Veg Noodles",
            "description": "Stir-fried noodles loaded with cabbage, carrot, and bell peppers.",
            "price": 229,
            "isVeg": true
          },
          {
            "name": "Schezwan Veg Noodles",
            "description": "Spicy stir-fried noodles tossed in hot Schezwan paste.",
            "price": 239,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Hongkong Noodles (Veg)",
            "description": "Stir-fried noodles with a sweet and spicy soy glaze and dry red chillies.",
            "price": 259,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Hakka Noodles (Veg)",
            "description": "Classic mild Hakka-style stir-fried noodles.",
            "price": 259,
            "isVeg": true
          },
          {
            "name": "American Chopsuey (Veg)",
            "description": "Crispy fried noodles topped with a sweet and sour vegetable gravy.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Chinese Chopsuey (Veg)",
            "description": "Crispy noodles served with a white soy garlic vegetable sauce.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Assorted Vegetables in Chilli Bean Sauce",
            "description": "Veg main course served in a thick, spicy black bean sauce.",
            "price": 309,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Egg Fried Rice",
            "description": "Stir-fried rice tossed with scrambled eggs and spring onions.",
            "price": 239,
            "isVeg": false
          },
          {
            "name": "Schezwan Egg Fried Rice",
            "description": "Spicy egg fried rice cooked with Schezwan sauce.",
            "price": 249,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Chicken Fried Rice",
            "description": "Classic fried rice tossed with egg and chicken chunks.",
            "price": 259,
            "isVeg": false
          },
          {
            "name": "Schezwan Chicken Fried Rice",
            "description": "Fiery fried rice cooked with chicken, egg, and Schezwan paste.",
            "price": 269,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Mix Non-Veg Fried Rice",
            "description": "Premium fried rice loaded with chicken, mutton, egg, and prawns.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Special Chicken Fried Rice",
            "description": "Chef's special recipe chicken fried rice with extra chicken chunks.",
            "price": 259,
            "isVeg": false
          },
          {
            "name": "Burnt Garlic Fried Rice (Non-Veg)",
            "description": "Chicken and egg fried rice flavored with roasted garlic.",
            "price": 259,
            "isVeg": false
          },
          {
            "name": "Kimchi Fried Rice (Non-Veg)",
            "description": "Spicy kimchi fried rice cooked with chicken chunks and egg.",
            "price": 269,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Egg Noodles",
            "description": "Stir-fried noodles tossed with eggs and basic spices.",
            "price": 249,
            "isVeg": false
          },
          {
            "name": "Chicken Noodles",
            "description": "Stir-fried noodles loaded with chicken pieces and eggs.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Schezwan Chicken Noodles",
            "description": "Spicy chicken and egg noodles stir-fried in Schezwan paste.",
            "price": 279,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Hongkong Noodles (Non-Veg)",
            "description": "Chicken noodles with a sweet and spicy soy glaze.",
            "price": 279,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Hakka Noodles (Egg)",
            "description": "Mild Hakka-style egg noodles.",
            "price": 269,
            "isVeg": false
          },
          {
            "name": "Hakka Noodles (Chicken)",
            "description": "Mild Hakka-style chicken noodles.",
            "price": 279,
            "isVeg": false
          },
          {
            "name": "Hakka Noodles (Prawns)",
            "description": "Mild Hakka-style prawn noodles.",
            "price": 289,
            "isVeg": false
          },
          {
            "name": "American Chopsuey (Non-Veg)",
            "description": "Crispy noodles topped with chicken, egg, and sweet-sour gravy.",
            "price": 319,
            "isVeg": false
          },
          {
            "name": "Chinese Chopsuey (Non-Veg)",
            "description": "Crispy noodles served with chicken and white garlic sauce.",
            "price": 319,
            "isVeg": false
          },
          {
            "name": "Schezwan Prawn Noodles",
            "description": "Spicy stir-fried noodles tossed with prawns and Schezwan paste.",
            "price": 359,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Sliced Chicken with Oyster Sauce",
            "description": "Tender chicken slices cooked in oyster sauce, served as a main dish.",
            "price": 279,
            "isVeg": false
          },
          {
            "name": "Thai Green Curry with Basmati Rice (Veg)",
            "description": "Rich coconut green curry with vegetables, served with basmati rice.",
            "price": 339,
            "isVeg": true
          },
          {
            "name": "Thai Green Curry with Basmati Rice (Chicken)",
            "description": "Rich coconut green curry with chicken, served with basmati rice.",
            "price": 379,
            "isVeg": false
          },
          {
            "name": "Thai Green Curry with Basmati Rice (Prawn)",
            "description": "Rich coconut green curry with fresh prawns, served with basmati rice.",
            "price": 399,
            "isVeg": false
          }
        ]
      },
      {
        "name": "Quesadillas, Salads & Bowls",
        "items": [
          {
            "name": "Paneer Makhani Rice Bowl",
            "description": "Fragrant buttered rice served with rich, creamy paneer makhani gravy.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Basil Pesto Rice Bowl (Veg)",
            "description": "Herbed rice topped with green basil pesto sauce and paneer.",
            "price": 269,
            "isVeg": true
          },
          {
            "name": "Basil Pesto Chicken Rice Bowl",
            "description": "Herbed rice topped with pesto chicken strips and cheese.",
            "price": 319,
            "isVeg": false
          },
          {
            "name": "Chettinad Chicken Rice Bowl",
            "description": "Rice bowl served with spicy, aromatic South Indian Chettinad chicken curry.",
            "price": 319,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Veg Quesadilla",
            "description": "Mexican dish made with tortilla filled with cheese, veggies, and beans.",
            "price": 299,
            "isVeg": true
          },
          {
            "name": "Non-Veg Quesadilla",
            "description": "Mexican tortilla folded with melted cheese, chicken, and spicy salsa.",
            "price": 319,
            "isVeg": false,
            "isSpicy": true
          },
          {
            "name": "Caesar Salad (Veg)",
            "description": "Lettuce, croutons, and Parmesan tossed in our creamy Caesar dressing.",
            "price": 229,
            "isVeg": true
          },
          {
            "name": "Caesar Salad (Chicken)",
            "description": "Caesar salad topped with warm, juicy grilled chicken breast strips.",
            "price": 259,
            "isVeg": false
          }
        ]
      }
    ]
  },
  {
    "id": "drinks-desserts",
    "name": "Drinks & Desserts",
    "subcategories": [
      {
        "name": "Desserts & Shakes",
        "items": [
          {
            "name": "Affogato",
            "description": "Vanilla ice cream drowned in a hot shot of fresh espresso.",
            "price": 170,
            "isVeg": true
          },
          {
            "name": "Hot Brownie Delight",
            "description": "Warm chocolate brownie served with vanilla ice cream and hot chocolate sauce.",
            "price": 220,
            "isVeg": true
          },
          {
            "name": "French Hot Chocolate",
            "description": "Thick, rich, and velvety French-style hot chocolate.",
            "price": 180,
            "isVeg": true
          },
          {
            "name": "Sizzling Brownie",
            "description": "Warm chocolate brownie served on a hot sizzler plate with vanilla ice cream and chocolate syrup.",
            "price": 180,
            "isVeg": true
          },
          {
            "name": "Vanilla Ice Cream",
            "description": "Simple and classic premium vanilla scoop.",
            "price": 90,
            "isVeg": true
          },
          {
            "name": "Chocolate Ice Cream",
            "description": "Rich scoop of premium dark chocolate ice cream.",
            "price": 100,
            "isVeg": true
          },
          {
            "name": "Strawberry Ice Cream",
            "description": "Sweet scoop of strawberry ice cream.",
            "price": 100,
            "isVeg": true
          },
          {
            "name": "Butterscotch Ice Cream",
            "description": "Creamy butterscotch scoop with crunchy praline nuts.",
            "price": 100,
            "isVeg": true
          },
          {
            "name": "Blackcurrant Ice Cream",
            "description": "Sweet scoop loaded with dried blackcurrant pieces.",
            "price": 110,
            "isVeg": true
          },
          {
            "name": "Vanilla Thick Shake",
            "description": "Thick and creamy shake blended with vanilla pods.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Belgian Chocolate Thick Shake",
            "description": "Thick shake made with rich Belgian dark chocolate.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Butterscotch Thick Shake",
            "description": "Creamy shake blended with butterscotch syrup.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Strawberry Thick Shake",
            "description": "Thick shake made with real strawberry puree.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Blackcurrant Thick Shake",
            "description": "Creamy thick shake flavored with sweet blackcurrants.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Mango Thick Shake",
            "description": "Thick shake made with sweet Alphonso mango pulp.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Guava Thick Shake",
            "description": "Creamy shake flavored with tropical sweet pink guava.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Bae's Chocolate Pleasure",
            "description": "Premium thick shake blended with chocolate cake and nuts.",
            "price": 310,
            "isVeg": true
          },
          {
            "name": "Banana with Caramel Shake",
            "description": "Thick shake blended with fresh bananas and sweet butter caramel.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Brownie Milk Shake",
            "description": "Rich milkshake blended with chocolate fudge brownie pieces.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Red Velvet Milk Shake",
            "description": "Blended milkshake flavored with red velvet crumbs and cream cheese.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Kit Kat Milk Shake",
            "description": "Blended milkshake loaded with Kit Kat chocolate pieces.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Oreo Thick Shake",
            "description": "Creamy thick shake blended with Oreo cookies and vanilla cream.",
            "price": 285,
            "isVeg": true
          },
          {
            "name": "Ferrero Rocher Shake",
            "description": "Decadent thick shake made with Ferrero Rocher hazelnut chocolates.",
            "price": 310,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Mojitos & Mocktails",
        "items": [
          {
            "name": "Virgin Mojito",
            "description": "Refreshing drink with muddled mint leaves, lime juice, sugar, and club soda.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Green Apple Mojito",
            "description": "Mojito flavored with tart green apple syrup.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Strawberry Mojito",
            "description": "Mojito flavored with sweet strawberry puree.",
            "price": 220,
            "isVeg": true
          },
          {
            "name": "Watermelon Mojito",
            "description": "Mojito infused with fresh watermelon juice.",
            "price": 220,
            "isVeg": true
          },
          {
            "name": "Blood Orange Mojito",
            "description": "Mojito flavored with rich blood orange syrup.",
            "price": 210,
            "isVeg": true
          },
          {
            "name": "Fresh Lime (Sweet)",
            "description": "Freshly squeezed lime juice with sugar syrup.",
            "price": 140,
            "isVeg": true
          },
          {
            "name": "Fresh Lime (Salt)",
            "description": "Freshly squeezed lime juice with table salt.",
            "price": 140,
            "isVeg": true
          },
          {
            "name": "Fresh Lime (Masala)",
            "description": "Fresh lime juice mixed with spicy Indian chaat masala.",
            "price": 140,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Fresh Lime (Sweet & Salt)",
            "description": "Fresh lime juice balanced with sugar and salt.",
            "price": 140,
            "isVeg": true
          },
          {
            "name": "Sparkling Mango Mocktail",
            "description": "Fizzy mango syrup mocktail with lime.",
            "price": 180,
            "isVeg": true
          },
          {
            "name": "Guava Punch Mocktail",
            "description": "Sweet and spicy guava mocktail with a hint of chilli.",
            "price": 180,
            "isVeg": true,
            "isSpicy": true
          },
          {
            "name": "Blue Beach Mocktail",
            "description": "Beautiful blue cura\u00e7ao syrup mocktail with sprite and fresh lime.",
            "price": 180,
            "isVeg": true
          },
          {
            "name": "Orange A Peel",
            "description": "Creamy orange mocktail made with orange juice, vanilla, and club soda.",
            "price": 200,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Ice Teas & Coolers",
        "items": [
          {
            "name": "Lemon Ice Tea",
            "description": "Chilled black tea flavored with fresh lemon juice and sugar.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Peach Ice Tea",
            "description": "Chilled black tea flavored with sweet peach syrup.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Strawberry Ice Tea",
            "description": "Chilled tea flavored with sweet strawberry syrup.",
            "price": 220,
            "isVeg": true
          },
          {
            "name": "Green Apple Ice Tea",
            "description": "Chilled tea flavored with tart green apple syrup.",
            "price": 220,
            "isVeg": true
          },
          {
            "name": "Watermelon Ice Tea",
            "description": "Chilled tea flavored with watermelon juice.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Refreshing Cooler",
            "description": "Fizzy mint and cucumber cooler drink.",
            "price": 190,
            "isVeg": true
          },
          {
            "name": "Strawberry Wild Cooler",
            "description": "Fizzy cooler drink loaded with strawberry pulp.",
            "price": 190,
            "isVeg": true
          },
          {
            "name": "Mango Daiquiri Mint Cooler",
            "description": "Fizzy drink flavored with mango pulp, mint, and lime.",
            "price": 190,
            "isVeg": true
          },
          {
            "name": "Cranberry Cooler",
            "description": "Fizzy tart cranberry juice cooler.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Body Booster Pomegranate Lemonade",
            "description": "Lemonade mixed with fresh pomegranate juice.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Juicy Orange Grenade Lemonade",
            "description": "Fizzy lemonade infused with orange and grenadine syrups.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Brazilian Lemonade",
            "description": "Creamy lemonade made with fresh limes and condensed milk.",
            "price": 200,
            "isVeg": true
          },
          {
            "name": "Watermelon Lemonade",
            "description": "Sweet lemonade combined with fresh watermelon juice.",
            "price": 210,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Coffee & Frappes",
        "items": [
          {
            "name": "Cappuccino",
            "description": "Classic espresso coffee topped with thick hot frothed milk.",
            "price": 130,
            "isVeg": true
          },
          {
            "name": "Cappuccino Grande",
            "description": "Larger double shot cappuccino.",
            "price": 150,
            "isVeg": true
          },
          {
            "name": "Cafe Latte",
            "description": "Espresso coffee mixed with steamed milk and a thin layer of foam.",
            "price": 160,
            "isVeg": true
          },
          {
            "name": "Cafe Mocha",
            "description": "Espresso coffee blended with chocolate syrup and hot milk.",
            "price": 160,
            "isVeg": true
          },
          {
            "name": "Espresso Shot",
            "description": "A hot, concentrated shot of pure black coffee.",
            "price": 100,
            "isVeg": true
          },
          {
            "name": "Cinnamon Black Coffee",
            "description": "Hot black coffee infused with aromatic cinnamon bark.",
            "price": 125,
            "isVeg": true
          },
          {
            "name": "Vanilla Cappuccino",
            "description": "Cappuccino flavored with sweet vanilla syrup.",
            "price": 150,
            "isVeg": true
          },
          {
            "name": "Americano",
            "description": "Espresso shot diluted with hot water for a smooth black coffee.",
            "price": 110,
            "isVeg": true
          },
          {
            "name": "Caf\u00e9 Macchiato",
            "description": "Espresso shot marked with a tiny dollop of frothed milk foam.",
            "price": 160,
            "isVeg": true
          },
          {
            "name": "Caramel Macchiato",
            "description": "Espresso coffee flavored with sweet vanilla and rich caramel drizzle.",
            "price": 180,
            "isVeg": true
          },
          {
            "name": "Frappe - Cappuccino",
            "description": "Classic blended cold coffee with milk and vanilla ice cream.",
            "price": 230,
            "isVeg": true
          },
          {
            "name": "Choco Delight Frappe",
            "description": "Blended cold coffee loaded with sweet chocolate sauce.",
            "price": 260,
            "isVeg": true
          },
          {
            "name": "Hazelnut Frappe",
            "description": "Blended cold coffee flavored with sweet hazelnut syrup.",
            "price": 260,
            "isVeg": true
          },
          {
            "name": "Irish Frappe",
            "description": "Blended cold coffee flavored with sweet Irish cream syrup.",
            "price": 260,
            "isVeg": true
          },
          {
            "name": "Vanilla Frappe",
            "description": "Blended cold coffee flavored with sweet vanilla syrup.",
            "price": 260,
            "isVeg": true
          }
        ]
      },
      {
        "name": "Soft Drinks & Add-ons",
        "items": [
          {
            "name": "Water Bottle (1L)",
            "description": "Packaged mineral drinking water.",
            "price": 35,
            "isVeg": true
          },
          {
            "name": "Thumbs Up (Can)",
            "description": "Aerated cola beverage.",
            "price": 50,
            "isVeg": true
          },
          {
            "name": "Coke (Can)",
            "description": "Classic carbonated beverage.",
            "price": 50,
            "isVeg": true
          },
          {
            "name": "Sprite (Can)",
            "description": "Aerated lemon-lime beverage.",
            "price": 50,
            "isVeg": true
          },
          {
            "name": "Extra Ice Cream Scoop",
            "description": "Add an extra scoop of vanilla ice cream to any dessert.",
            "price": 30,
            "isVeg": true
          },
          {
            "name": "Extra Chocolate Sauce",
            "description": "Drizzle extra chocolate sauce on top.",
            "price": 15,
            "isVeg": true
          },
          {
            "name": "Extra Espresso Shot",
            "description": "Add an extra espresso shot to your coffee.",
            "price": 30,
            "isVeg": true
          },
          {
            "name": "Extra Syrup (Hazelnut/Caramel/Vanilla/Irish)",
            "description": "Add extra flavored syrup to your drink.",
            "price": 20,
            "isVeg": true
          }
        ]
      }
    ]
  }
];