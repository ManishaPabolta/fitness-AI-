const diets = {
    weight_loss: {
        title: "🔥 Weight Loss Diet Plan",
       breakfast: [
    {
        name: "Oatmeal with Chia & Blueberries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/o.jfif",
        items: ["Oatmeal", "Chia seeds", "Blueberries", "Skimmed milk"],
        steps: [
            "Boil water or skimmed milk",
            "Add oats and cook for 5 min",
            "Add chia seeds and berries",
            "Serve hot"
        ]
    },
    {
        name: "Greek Yogurt with Granola & Strawberries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/g.jfif",
        items: ["Greek yogurt", "Honey", "Granola", "Strawberries"],
        steps: [
            "Take a bowl of Greek yogurt",
            "Add honey and granola",
            "Top with strawberries",
            "Serve immediately"
        ]
    },
    {
        name: "Spinach & Tomato Egg White Omelette",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/spanish.jfif",
        items: ["Egg white omelette", "Spinach", "Tomato"],
        steps: [
            "Beat egg whites",
            "Cook omelette with spinach and tomato",
            "Serve hot"
        ]
    },
    {
        name: "Avocado Toast with Cherry Tomatoes",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/avocado.jfif",
        items: ["Avocado toast", "Wholegrain bread", "Cherry tomatoes", "Lemon juice"],
        steps: [
            "Toast wholegrain bread",
            "Mash avocado with lemon juice",
            "Spread avocado on toast",
            "Top with sliced cherry tomatoes"
        ]
    },
    {
        name: "Banana Spinach Smoothie Bowl",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/banana.webp",
        items: ["Smoothie bowl", "Banana", "Spinach", "Almond milk", "Granola"],
        steps: [
            "Blend banana, spinach and almond milk",
            "Pour into a bowl",
            "Top with granola",
            "Serve chilled"
        ]
    },
    {
        name: "Protein Pancakes with Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/protien.jfif",
        items: ["Protein pancakes", "Oats", "Egg whites", "Banana", "Cinnamon"],
        steps: [
            "Mix oats, egg whites, banana and cinnamon",
            "Cook pancakes on non-stick pan",
            "Serve with fresh berries"
        ]
    },
    {
        name: "Cottage Cheese & Pineapple Bowl",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/cottage.jfif",
        items: ["Cottage cheese bowl", "Cottage cheese", "Pineapple chunks", "Flax seeds"],
        steps: [
            "Put cottage cheese in a bowl",
            "Add pineapple chunks and flax seeds",
            "Serve fresh"
        ]
    },
    {
        name: "Chia Pudding with Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/china.jfif",
        items: ["Chia pudding", "Chia seeds", "Almond milk", "Berries"],
        steps: [
            "Mix chia seeds with almond milk",
            "Refrigerate overnight",
            "Top with fresh berries and serve"
        ]
    },
    {
        name: "Banana Cinnamon Oatmeal",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/banana%20chin.jfif",
        items: ["Banana oatmeal", "Oats", "Banana", "Cinnamon", "Almond milk"],
        steps: [
            "Cook oats with almond milk",
            "Mash banana and mix with oats",
            "Sprinkle cinnamon and serve"
        ]
    },
    {
        name: "Scrambled Eggs with Spinach & Tomato",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/scrambled.jfif",
        items: ["Scrambled eggs", "Eggs", "Spinach", "Tomato", "Olive oil"],
        steps: [
            "Heat olive oil in pan",
            "Scramble eggs with spinach and tomato",
            "Serve hot"
        ]
    },
    {
        name: "Overnight Oats with Blueberries & Honey",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/overnight.jfif",
        items: ["Overnight oats", "Oats", "Greek yogurt", "Blueberries", "Honey"],
        steps: [
            "Mix oats with Greek yogurt and honey",
            "Add blueberries",
            "Refrigerate overnight",
            "Serve chilled"
        ]
    },
    {
        name: "Veggie Egg Muffins",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/vegiee.jfif",
        items: ["Veggie egg muffins", "Eggs", "Bell peppers", "Spinach", "Onion"],
        steps: [
            "Preheat oven to 180°C",
            "Mix eggs with chopped vegetables",
            "Pour into muffin tray and bake 20 min",
            "Serve warm"
        ]
    },
    {
        name: "Avocado Spinach Smoothie",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/avacado.jfif",
        items: ["Avocado smoothie", "Avocado", "Spinach", "Almond milk", "Lemon juice"],
        steps: [
            "Blend all ingredients until smooth",
            "Serve immediately"
        ]
    },
    {
        name: "Quinoa Porridge with Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/quinoa.jfif",
        items: ["Quinoa porridge", "Quinoa", "Almond milk", "Cinnamon", "Berries"],
        steps: [
            "Cook quinoa in almond milk",
            "Add cinnamon and berries",
            "Serve warm"
        ]
    },
    {
        name: "Spinach Banana Protein Smoothie",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/spanish.jfif",
        items: ["Spinach smoothie", "Spinach", "Banana", "Protein powder", "Water"],
        steps: [
            "Blend all ingredients until smooth",
            "Serve chilled"
        ]
    },
    {
        name: "Apple Cinnamon Oats",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/apple.webp",
        items: ["Apple cinnamon oats", "Oats", "Apple slices", "Cinnamon", "Almond milk"],
        steps: [
            "Cook oats with almond milk",
            "Add apple slices and cinnamon",
            "Serve warm"
        ]
    },
    {
        name: "Peanut Butter Banana Toast",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/peanut.jfif",
        items: ["Peanut butter toast", "Wholegrain bread", "Peanut butter", "Banana slices"],
        steps: [
            "Toast bread",
            "Spread peanut butter",
            "Top with banana slices"
        ]
    },
    {
        name: "Mixed Berry Smoothie",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/mixed.jfif",
        items: ["Berry smoothie", "Mixed berries", "Greek yogurt", "Almond milk"],
        steps: [
            "Blend all ingredients until smooth",
            "Serve chilled"
        ]
    },
    {
        name: "Egg & Avocado Toast",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/egg.jfif",
        items: ["Egg avocado toast", "Wholegrain bread", "Egg", "Avocado"],
        steps: [
            "Cook egg sunny side up",
            "Toast bread and mash avocado",
            "Top avocado toast with egg"
        ]
    },
    {
        name: "Protein Shake with Banana & Peanut Butter",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/protien%20shake.jfif",
        items: ["Protein shake", "Protein powder", "Banana", "Almond milk", "Peanut butter"],
        steps: [
            "Add all ingredients to blender",
            "Blend until smooth",
            "Serve immediately"
        ]
    }
],
snacks: [
    {
        name: "Almonds & Apple Slices",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/almond.jfif",
        items: ["Almonds", "Apple"],
        steps: [
            "Take 10-12 almonds",
            "Wash and slice apple",
            "Serve together"
        ]
    },
    {
        name: "Carrot Sticks with Hummus",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/carot.jfif",
        items: ["Carrot sticks", "Hummus"],
        steps: [
            "Wash and cut carrot into sticks",
            "Serve with hummus"
        ]
    },
    {
        name: "Greek Yogurt with Blueberries & Honey",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/greek.1.jfif",
        items: ["Greek yogurt", "Blueberries", "Honey"],
        steps: [
            "Take a bowl of Greek yogurt",
            "Add blueberries and drizzle honey",
            "Serve chilled"
        ]
    },
    {
        name: "Cucumber Cream Cheese Bites",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/c.jfif",
        items: ["Cucumber slices", "Low-fat cream cheese"],
        steps: [
            "Wash and slice cucumber",
            "Spread cream cheese on slices",
            "Serve immediately"
        ]
    },
    {
        name: "Boiled Egg & Cherry Tomatoes",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/egg%20curry.jfif",
        items: ["Boiled egg", "Cherry tomatoes"],
        steps: [
            "Boil egg until fully cooked",
            "Serve with cherry tomatoes",
            "Sprinkle little salt if needed"
        ]
    },
    {
        name: "Rice Cakes with Peanut Butter & Banana",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/peanut%20buttter.jfif",
        items: ["Rice cakes", "Peanut butter", "Banana slices"],
        steps: [
            "Spread peanut butter on rice cakes",
            "Top with banana slices",
            "Serve fresh"
        ]
    },
    {
        name: "Mixed Nuts & Dried Cranberries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/mixed%20nut.jfif",
        items: ["Mixed nuts", "Dried cranberries"],
        steps: [
            "Take a small handful of mixed nuts",
            "Add few dried cranberries",
            "Mix and serve"
        ]
    },
    {
        name: "Apple Slices with Almond Butter",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/almond%20butter.jfif",
        items: ["Apple slices", "Almond butter"],
        steps: [
            "Slice apple",
            "Spread almond butter on slices",
            "Serve immediately"
        ]
    },
    {
        name: "Celery Sticks with Hummus",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/celery.jfif",
        items: ["Celery sticks", "Hummus"],
        steps: [
            "Wash and cut celery sticks",
            "Serve with hummus dip"
        ]
    },
    {
        name: "Protein Shake with Banana & Whey",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/protein%20shake.jfif",
        items: ["Protein shake", "Banana", "Almond milk", "Whey protein"],
        steps: [
            "Add all ingredients to blender",
            "Blend until smooth",
            "Serve immediately"
        ]
    }
],
lunch: [
    {
        name: "Grilled Chicken & Veggie Salad",
        image: "images/lunch1.png",
        items: ["Grilled chicken", "Lettuce", "Tomato", "Cucumber", "Olive oil"],
        steps: [
            "Grill chicken breast",
            "Chop vegetables",
            "Mix chicken with veggies and olive oil",
            "Serve fresh"
        ]
    },
    {
        name: "Quinoa Chickpea Salad",
        image: "images/lunch2.png",
        items: ["Quinoa", "Chickpeas", "Bell pepper", "Cucumber", "Lemon juice"],
        steps: [
            "Cook quinoa",
            "Mix with chopped vegetables and chickpeas",
            "Add lemon juice",
            "Serve chilled"
        ]
    },
    {
        name: "Grilled Salmon with Broccoli & Brown Rice",
        image: "images/lunch3.png",
        items: ["Grilled salmon", "Steamed broccoli", "Brown rice", "Olive oil"],
        steps: [
            "Grill salmon with spices",
            "Steam broccoli",
            "Cook brown rice",
            "Serve together on plate"
        ]
    },
    {
        name: "Turkey Spinach Salad with Balsamic",
        image: "images/lunch4.png",
        items: ["Turkey slices", "Spinach salad", "Cherry tomatoes", "Balsamic dressing"],
        steps: [
            "Slice turkey breast",
            "Mix spinach and cherry tomatoes",
            "Add balsamic dressing",
            "Top with turkey and serve"
        ]
    },
    {
        name: "Tuna Lettuce Salad",
        image: "images/lunch5.png",
        items: ["Tuna salad", "Lettuce", "Cucumber", "Olive oil", "Lemon juice"],
        steps: [
            "Drain tuna and mix with chopped lettuce and cucumber",
            "Add olive oil and lemon juice",
            "Serve chilled"
        ]
    },
    {
        name: "Grilled Chicken Wrap",
        image: "images/lunch6.png",
        items: ["Grilled chicken wrap", "Whole wheat wrap", "Lettuce", "Tomato", "Avocado"],
        steps: [
            "Grill chicken breast",
            "Assemble wrap with lettuce, tomato, avocado, and chicken",
            "Serve fresh"
        ]
    },
    {
        name: "Vegetable Tofu Stir-Fry",
        image: "images/lunch7.png",
        items: ["Vegetable stir-fry", "Broccoli", "Carrots", "Bell peppers", "Tofu", "Soy sauce"],
        steps: [
            "Chop all vegetables",
            "Stir-fry with tofu and soy sauce",
            "Serve hot"
        ]
    },
    {
        name: "Grilled Shrimp with Zucchini Noodles",
        image: "images/lunch8.png",
        items: ["Grilled shrimp", "Zucchini noodles", "Tomato sauce", "Olive oil"],
        steps: [
            "Grill shrimp with spices",
            "Cook zucchini noodles",
            "Mix noodles with tomato sauce",
            "Top with shrimp and serve"
        ]
    },
    {
        name: "Chicken Salad with Cherry Tomatoes",
        image: "images/lunch9.png",
        items: ["Chicken salad", "Lettuce", "Cucumber", "Cherry tomatoes", "Olive oil"],
        steps: [
            "Grill chicken and slice thinly",
            "Mix with vegetables",
            "Add olive oil and serve"
        ]
    },
    {
        name: "Quinoa Bowl with Black Beans & Avocado",
        image: "images/lunch10.png",
        items: ["Quinoa bowl", "Black beans", "Corn", "Tomato", "Avocado"],
        steps: [
            "Cook quinoa",
            "Mix with black beans, corn, tomato",
            "Top with avocado slices",
            "Serve fresh"
        ]
    },
    {
        name: "Grilled Turkey Burger Lettuce Wrap",
        image: "images/lunch11.png",
        items: ["Grilled turkey burger", "Lettuce wrap", "Tomato", "Onion", "Mustard"],
        steps: [
            "Grill turkey patty",
            "Assemble with lettuce, tomato, onion",
            "Add mustard and serve"
        ]
    },
    {
        name: "Baked Cod with Asparagus & Quinoa",
        image: "images/lunch12.png",
        items: ["Baked cod", "Steamed asparagus", "Quinoa", "Lemon"],
        steps: [
            "Bake cod with spices",
            "Steam asparagus",
            "Cook quinoa",
            "Serve together with lemon"
        ]
    },
    {
        name: "Chicken Avocado Salad",
        image: "images/lunch13.png",
        items: ["Chicken avocado salad", "Grilled chicken", "Avocado", "Lettuce", "Tomatoes"],
        steps: [
            "Grill chicken and slice",
            "Mix with avocado and vegetables",
            "Serve chilled"
        ]
    },
    {
        name: "Spinach Quinoa Salad",
        image: "images/lunch14.png",
        items: ["Spinach quinoa salad", "Spinach", "Quinoa", "Cherry tomatoes", "Cucumber"],
        steps: [
            "Cook quinoa",
            "Mix with spinach and chopped vegetables",
            "Serve fresh"
        ]
    },
    {
        name: "Grilled Tofu with Stir-Fried Vegetables",
        image: "images/lunch15.png",
        items: ["Grilled tofu", "Stir-fried vegetables", "Brown rice"],
        steps: [
            "Grill tofu",
            "Stir-fry vegetables",
            "Serve with brown rice"
        ]
    },
    {
        name: "Salmon Spinach Salad",
        image: "images/lunch16.png",
        items: ["Salmon salad", "Spinach", "Cucumber", "Olive oil", "Lemon juice"],
        steps: [
            "Grill salmon and slice",
            "Mix with vegetables and dressing",
            "Serve chilled"
        ]
    },
    {
        name: "Chicken Stir-Fry with Vegetables",
        image: "images/lunch17.png",
        items: ["Chicken stir-fry", "Chicken breast", "Broccoli", "Bell peppers", "Soy sauce"],
        steps: [
            "Cook chicken with soy sauce",
            "Add vegetables and stir-fry",
            "Serve hot"
        ]
    },
    {
        name: "Zucchini Noodles with Grilled Shrimp",
        image: "images/lunch18.png",
        items: ["Zucchini noodles", "Grilled shrimp", "Tomato basil sauce"],
        steps: [
            "Grill shrimp",
            "Cook zucchini noodles",
            "Mix with sauce and serve"
        ]
    },
    {
        name: "Turkey Lettuce Wraps",
        image: "images/lunch19.png",
        items: ["Turkey lettuce wraps", "Turkey slices", "Lettuce", "Tomato", "Avocado"],
        steps: [
            "Slice turkey",
            "Assemble with lettuce, tomato, avocado",
            "Serve fresh"
        ]
    },
    {
        name: "Chickpea Salad with Lemon & Olive Oil",
        image: "images/lunch20.png",
        items: ["Chickpea salad", "Chickpeas", "Cucumber", "Tomato", "Lemon juice", "Olive oil"],
        steps: [
            "Mix chickpeas with chopped vegetables",
            "Add lemon juice and olive oil",
            "Serve chilled"
        ]
    }
],

dinner: [
    {
        name: "Steamed Veggies with Grilled Fish",
        image: "images/dinner1.png",
        items: ["Steamed broccoli", "Carrots", "Green beans", "Grilled fish"],
        steps: [
            "Steam all vegetables",
            "Grill fish with spices",
            "Serve together on plate"
        ]
    },
    {
        name: "Grilled Chicken with Zucchini Noodles",
        image: "images/dinner2.png",
        items: ["Zucchini noodles", "Tomato sauce", "Grilled chicken"],
        steps: [
            "Prepare zucchini noodles",
            "Cook chicken and tomato sauce",
            "Mix and serve"
        ]
    },
    {
        name: "Baked Salmon with Asparagus & Quinoa",
        image: "images/dinner3.png",
        items: ["Baked salmon", "Steamed asparagus", "Quinoa"],
        steps: [
            "Bake salmon with spices",
            "Steam asparagus",
            "Cook quinoa",
            "Serve together"
        ]
    },
    {
        name: "Grilled Shrimp with Cauliflower Rice",
        image: "images/dinner4.png",
        items: ["Grilled shrimp", "Cauliflower rice", "Stir-fried vegetables"],
        steps: [
            "Grill shrimp",
            "Cook cauliflower rice",
            "Stir-fry vegetables",
            "Serve together"
        ]
    },
    {
        name: "Chicken Stir-Fry with Bell Peppers",
        image: "images/dinner5.png",
        items: ["Chicken stir-fry", "Bell peppers", "Broccoli", "Carrots", "Soy sauce"],
        steps: [
            "Cook chicken with soy sauce",
            "Add vegetables and stir-fry",
            "Serve hot"
        ]
    },
    {
        name: "Grilled Cod with Spinach & Quinoa",
        image: "images/dinner6.png",
        items: ["Grilled cod", "Spinach salad", "Quinoa"],
        steps: [
            "Grill cod with spices",
            "Prepare spinach salad",
            "Serve with cooked quinoa"
        ]
    },
    {
        name: "Turkey Slices with Green Beans & Brown Rice",
        image: "images/dinner7.png",
        items: ["Turkey slices", "Steamed green beans", "Brown rice"],
        steps: [
            "Cook turkey slices",
            "Steam green beans",
            "Cook brown rice",
            "Serve together"
        ]
    },
    {
        name: "Grilled Tofu with Stir-Fried Vegetables & Quinoa",
        image: "images/dinner8.png",
        items: ["Grilled tofu", "Stir-fried vegetables", "Quinoa"],
        steps: [
            "Grill tofu",
            "Stir-fry vegetables",
            "Serve with quinoa"
        ]
    },
    {
        name: "Baked Tilapia with Broccoli & Cauliflower Mash",
        image: "images/dinner9.png",
        items: ["Baked tilapia", "Steamed broccoli", "Cauliflower mash"],
        steps: [
            "Bake tilapia with spices",
            "Steam broccoli",
            "Prepare cauliflower mash",
            "Serve together"
        ]
    },
    {
        name: "Chicken Zucchini Boats",
        image: "images/dinner10.png",
        items: ["Chicken zucchini boats", "Zucchini", "Chicken", "Tomato sauce"],
        steps: [
            "Slice zucchini in half",
            "Stuff with cooked chicken and tomato sauce",
            "Bake and serve"
        ]
    },
    {
        name: "Grilled Salmon with Spinach & Roasted Carrots",
        image: "images/dinner11.png",
        items: ["Grilled salmon", "Spinach", "Roasted carrots"],
        steps: [
            "Grill salmon",
            "Prepare spinach salad",
            "Roast carrots",
            "Serve together"
        ]
    },
    {
        name: "Shrimp Stir-Fry with Broccoli & Bell Peppers",
        image: "images/dinner12.png",
        items: ["Shrimp stir-fry", "Broccoli", "Bell peppers", "Zucchini"],
        steps: [
            "Stir-fry shrimp with vegetables",
            "Season with herbs",
            "Serve hot"
        ]
    },
    {
        name: "Chicken Salad Bowl",
        image: "images/dinner13.png",
        items: ["Chicken salad bowl", "Grilled chicken", "Lettuce", "Cucumber", "Tomatoes"],
        steps: [
            "Grill chicken and slice",
            "Mix with vegetables",
            "Serve chilled"
        ]
    },
    {
        name: "Grilled Turkey with Asparagus & Brown Rice",
        image: "images/dinner14.png",
        items: ["Grilled turkey", "Steamed asparagus", "Brown rice"],
        steps: [
            "Grill turkey slices",
            "Steam asparagus",
            "Cook brown rice",
            "Serve together"
        ]
    },
    {
        name: "Vegetable Tofu Stir-Fry",
        image: "images/dinner15.png",
        items: ["Vegetable stir-fry", "Tofu", "Broccoli", "Carrots", "Bell peppers"],
        steps: [
            "Stir-fry tofu with vegetables",
            "Add light soy sauce",
            "Serve hot"
        ]
    },
    {
        name: "Baked Chicken Breast with Green Beans & Quinoa",
        image: "images/dinner16.png",
        items: ["Baked chicken breast", "Steamed green beans", "Quinoa"],
        steps: [
            "Bake chicken with spices",
            "Steam green beans",
            "Cook quinoa",
            "Serve together"
        ]
    },
    {
        name: "Grilled Cod with Roasted Zucchini & Cauliflower Rice",
        image: "images/dinner17.png",
        items: ["Grilled cod", "Roasted zucchini", "Cauliflower rice"],
        steps: [
            "Grill cod with lemon",
            "Roast zucchini slices",
            "Prepare cauliflower rice",
            "Serve together"
        ]
    },
    {
        name: "Salmon Spinach Salad with Lemon Dressing",
        image: "images/dinner18.png",
        items: ["Salmon salad", "Spinach", "Cucumber", "Cherry tomatoes", "Lemon dressing"],
        steps: [
            "Grill salmon",
            "Mix vegetables",
            "Top with salmon and lemon dressing",
            "Serve chilled"
        ]
    },
    {
        name: "Turkey Stir-Fry with Vegetables",
        image: "images/dinner19.png",
        items: ["Turkey stir-fry", "Broccoli", "Bell peppers", "Carrots"],
        steps: [
            "Stir-fry turkey with vegetables",
            "Season with spices",
            "Serve hot"
        ]
    },
    {
        name: "Grilled Chicken with Zucchini Noodles & Tomato Basil Sauce",
        image: "images/dinner20.png",
        items: ["Grilled chicken", "Zucchini noodles", "Tomato basil sauce"],
        steps: [
            "Grill chicken slices",
            "Prepare zucchini noodles",
            "Mix with tomato basil sauce",
            "Serve hot"
        ]
    }
],
    },
    weight_gain: {
        title: "💪 Muscle Gain Diet Plan",
      breakfast: [
    {
        name: "Oats with Banana & Peanut Butter",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/oats%20with.jfif",
        items: ["Oats", "Whole milk", "Peanut butter", "Banana", "Honey"],
        steps: [
            "Boil milk and add oats",
            "Cook oats for 5-7 minutes",
            "Add peanut butter and sliced banana",
            "Drizzle honey on top and serve"
        ]
    },
    {
        name: "Avocado Toast with Eggs",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/avocado%20toast%20with%20egg.jfif",
        items: ["Eggs", "Whole grain toast", "Avocado", "Olive oil"],
        steps: [
            "Scramble or fry eggs in olive oil",
            "Toast the bread",
            "Mash avocado and spread on toast",
            "Serve eggs on the side"
        ]
    },
    {
        name: "Greek Yogurt Bowl with Granola & Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/greek.jfif",
        items: ["Greek yogurt", "Granola", "Honey", "Mixed berries", "Chia seeds"],
        steps: [
            "Take Greek yogurt in a bowl",
            "Top with granola, berries, and chia seeds",
            "Drizzle honey and serve"
        ]
    },
    {
        name: "Banana Peanut Butter Protein Smoothie",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/banana%20penut.jfif",
        items: ["Banana", "Peanut butter", "Whole milk", "Protein powder"],
        steps: [
            "Add banana, peanut butter, milk, and protein powder in blender",
            "Blend until smooth",
            "Serve immediately"
        ]
    },
    {
        name: "Spinach & Cheese Omelette",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/spinach%20and%20cheese%20omelette.jfif",
        items: ["Omelette", "Cheese", "Spinach", "Tomato", "Olive oil"],
        steps: [
            "Beat eggs and pour into heated pan with olive oil",
            "Add spinach, tomatoes, and cheese",
            "Cook until eggs are set",
            "Serve hot"
        ]
    },
    {
        name: "Whole Wheat Banana Pancakes",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/whole.jfif",
        items: ["Pancakes", "Whole wheat flour", "Eggs", "Milk", "Honey", "Banana"],
        steps: [
            "Mix flour, eggs, and milk into batter",
            "Cook pancakes on non-stick pan",
            "Top with banana slices and honey",
            "Serve hot"
        ]
    },
    {
        name: "Oats & Almond Butter Smoothie Bowl",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/oats%20and%20almond.jfif",
        items: ["Smoothie bowl", "Oats", "Banana", "Almond butter", "Almond milk", "Berries"],
        steps: [
            "Blend oats, banana, almond milk, and almond butter",
            "Pour in bowl and top with berries",
            "Serve chilled"
        ]
    },
    {
        name: "Scrambled Eggs with Avocado Toast",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/scrambled%20eggs.jfif",
        items: ["Scrambled eggs", "Whole grain toast", "Avocado", "Butter"],
        steps: [
            "Scramble eggs in butter",
            "Toast bread",
            "Serve eggs with avocado slices on toast"
        ]
    },
    {
        name: "Protein Oatmeal with Almonds & Honey",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/protien%20oatmeal.jfif",
        items: ["Protein oatmeal", "Oats", "Milk", "Protein powder", "Almonds", "Honey"],
        steps: [
            "Cook oats with milk",
            "Add protein powder and mix well",
            "Top with almonds and honey",
            "Serve hot"
        ]
    },
    {
        name: "Cinnamon French Toast",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/chinnamon.jfif",
        items: ["French toast", "Whole grain bread", "Eggs", "Milk", "Cinnamon", "Honey"],
        steps: [
            "Whisk eggs, milk, and cinnamon",
            "Dip bread slices and cook on pan",
            "Drizzle honey on top and serve"
        ]
    },
    {
        name: "Peanut Butter Banana Sandwich",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/peanut.jfif",
        items: ["Peanut butter banana sandwich", "Whole grain bread", "Peanut butter", "Banana"],
        steps: [
            "Spread peanut butter on bread",
            "Add banana slices",
            "Close sandwich and serve"
        ]
    },
    {
        name: "Avocado Banana Smoothie",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/avacado.jfif",
        items: ["Avocado smoothie", "Avocado", "Banana", "Whole milk", "Honey"],
        steps: [
            "Blend avocado, banana, milk, and honey",
            "Serve immediately"
        ]
    },
    {
        name: "Chia Pudding with Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/chai.jfif",
        items: ["Chia pudding", "Chia seeds", "Whole milk", "Honey", "Berries"],
        steps: [
            "Mix chia seeds with milk",
            "Refrigerate overnight",
            "Top with honey and berries",
            "Serve chilled"
        ]
    },
    {
        name: "Egg Muffins with Spinach & Cheese",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/egg%20muffins.jfif",
        items: ["Egg muffins", "Eggs", "Spinach", "Cheese", "Tomatoes"],
        steps: [
            "Preheat oven to 180°C",
            "Mix eggs with vegetables and cheese",
            "Pour into muffin tray and bake 15-20 min",
            "Serve warm"
        ]
    },
    {
        name: "Bagel with Peanut Butter & Banana",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/bagel.jfif",
        items: ["Bagel with peanut butter", "Whole grain bagel", "Peanut butter", "Banana"],
        steps: [
            "Toast bagel",
            "Spread peanut butter",
            "Add banana slices on top",
            "Serve immediately"
        ]
    },
    {
        name: "Banana Protein Shake",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/banana%20protein%20shake.jfif",
        items: ["Protein shake", "Protein powder", "Whole milk", "Banana", "Oats"],
        steps: [
            "Add all ingredients in blender",
            "Blend until smooth",
            "Serve immediately"
        ]
    },
    {
        name: "Cottage Cheese with Honey & Berries",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/cottage%20cheese.jfif",
        items: ["Cottage cheese bowl", "Cottage cheese", "Honey", "Almonds", "Berries"],
        steps: [
            "Put cottage cheese in bowl",
            "Add honey, almonds, and berries",
            "Serve fresh"
        ]
    },
    {
        name: "Avocado Toast with Egg",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/avocado%20toast%20with%20egg.jfif",
        items: ["Avocado toast with eggs", "Whole grain bread", "Avocado", "Egg", "Olive oil"],
        steps: [
            "Toast bread",
            "Mash avocado on toast",
            "Cook egg and place on top",
            "Serve immediately"
        ]
    },
    {
        name: "Banana Pancakes with Honey",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/banana%20pancakes.jfif",
        items: ["Banana pancakes", "Whole wheat flour", "Eggs", "Milk", "Banana", "Honey"],
        steps: [
            "Mix flour, eggs, milk, and mashed banana",
            "Cook pancakes on pan",
            "Drizzle honey and serve"
        ]
    },
    {
        name: "Spinach & Cheese Omelette Wrap",
        image: "https://uploads.onecompiler.io/43tarkw9q/44f942vkj/spinach%20and%20cheese%20omelette.jfif",
        items: ["Omelette wrap", "Eggs", "Cheese", "Spinach", "Whole wheat wrap"],
        steps: [
            "Cook omelette with cheese and spinach",
            "Place in whole wheat wrap",
            "Roll and serve hot"
        ]
    }
],

lunch: [
    {
        name: "Grilled Chicken with Brown Rice & Broccoli",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/grilled%20chicken%20with.jfif",
        items: ["Grilled chicken breast", "Brown rice", "Steamed broccoli", "Olive oil"],
        steps: [
            "Grill chicken with spices",
            "Cook brown rice",
            "Steam broccoli",
            "Serve chicken with rice and broccoli, drizzle olive oil"
        ]
    },
    {
        name: "Turkey Avocado Sandwich",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/turkey.jfif",
        items: ["Turkey sandwich", "Whole grain bread", "Avocado", "Cheese", "Spinach"],
        steps: [
            "Toast bread",
            "Add turkey slices, avocado, cheese, and spinach",
            "Assemble sandwich and serve"
        ]
    },
    {
        name: "Grilled Salmon with Quinoa & Asparagus",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/grilled%20salmon.jfif",
        items: ["Grilled salmon", "Quinoa", "Steamed asparagus", "Olive oil"],
        steps: [
            "Grill salmon",
            "Cook quinoa",
            "Steam asparagus",
            "Serve together with olive oil"
        ]
    },
    {
        name: "Chicken & Veggie Stir-Fry",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/quinoa%20chicken%20and.jfif",
        items: ["Chicken stir-fry", "Chicken breast", "Bell peppers", "Broccoli", "Carrots", "Soy sauce"],
        steps: [
            "Cook chicken in pan",
            "Add chopped vegetables",
            "Stir-fry with soy sauce",
            "Serve hot with rice or noodles"
        ]
    },
    {
        name: "Tuna Salad with Lemon Dressing",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/tuna%20salad.jfif",
        items: ["Tuna salad", "Lettuce", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon juice"],
        steps: [
            "Mix tuna with chopped vegetables",
            "Add olive oil and lemon juice",
            "Serve chilled"
        ]
    },
    {
        name: "Grilled Beef Wrap",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/beef.jfif",
        items: ["Beef wrap", "Whole wheat wrap", "Grilled beef", "Lettuce", "Cheese", "Avocado"],
        steps: [
            "Grill beef slices",
            "Assemble wrap with lettuce, cheese, avocado, and beef",
            "Serve fresh"
        ]
    },
    {
        name: "Quinoa Chicken Bowl",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fazmdd9/quinoa%20chicken%20and.jfif",
        items: ["Quinoa bowl", "Grilled chicken", "Black beans", "Corn", "Avocado"],
        steps: [
            "Cook quinoa",
            "Add black beans, corn, and grilled chicken",
            "Top with avocado and serve"
        ]
    },
    {
        name: "Shrimp & Vegetable Stir-Fry",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/download.jfif",
        items: ["Shrimp stir-fry", "Shrimp", "Broccoli", "Bell peppers", "Carrots", "Olive oil"],
        steps: [
            "Cook shrimp with olive oil",
            "Add vegetables and stir-fry",
            "Serve hot with rice"
        ]
    },
    {
        name: "Chicken Quinoa Salad",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/ch.jfif",
        items: ["Chicken quinoa salad", "Grilled chicken", "Quinoa", "Spinach", "Tomatoes", "Avocado"],
        steps: [
            "Cook quinoa",
            "Mix with spinach, tomatoes, and grilled chicken",
            "Top with avocado slices and serve"
        ]
    },
    {
        name: "Turkey Burger with Whole Grain Bun",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/bu.jfif",
        items: ["Turkey burger", "Whole grain bun", "Turkey patty", "Cheese", "Lettuce", "Tomato"],
        steps: [
            "Grill turkey patty",
            "Assemble burger with cheese, lettuce, tomato, and bun",
            "Serve hot"
        ]
    },
     {
        name: "Salmon Rice Bowl with Avocado",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/sa.jfif",
        items: ["Grilled salmon", "Brown rice", "Steamed broccoli", "Avocado"],
        steps: [
            "Grill salmon",
            "Cook brown rice and steam broccoli",
            "Assemble bowl with salmon, rice, broccoli, and avocado"
        ]
    },
    {
        name: "Chicken Pasta with Tomato Sauce & Cheese",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/cj.jfif",
        items: ["Chicken pasta", "Whole wheat pasta", "Grilled chicken", "Tomato sauce", "Cheese"],
        steps: [
            "Cook pasta",
            "Grill chicken",
            "Mix pasta with tomato sauce and chicken",
            "Top with cheese and serve"
        ]
    },
    {
        name: "Beef Stir-Fry with Vegetables",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/beef.jfif",
        items: ["Beef stir-fry", "Beef strips", "Broccoli", "Bell peppers", "Carrots", "Soy sauce"],
        steps: [
            "Cook beef strips",
            "Add chopped vegetables and stir-fry with soy sauce",
            "Serve hot with rice or quinoa"
        ]
    },
    {
        name: "Chicken Avocado Wrap",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/chicken%20avacado.jfif",
        items: ["Chicken avocado wrap", "Grilled chicken", "Avocado", "Spinach", "Whole wheat wrap"],
        steps: [
            "Grill chicken",
            "Mash avocado and layer on wrap with spinach and chicken",
            "Roll wrap and serve"
        ]
    },
    {
        name: "Tuna & Avocado Sandwich",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/tuna.jfif",
        items: ["Tuna sandwich", "Whole grain bread", "Tuna", "Avocado", "Spinach"],
        steps: [
            "Mix tuna with avocado",
            "Spread on bread and add spinach",
            "Assemble sandwich and serve"
        ]
    },
    {
        name: "Chicken Burrito Bowl",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/aa.jfif",
        items: ["Chicken burrito bowl", "Grilled chicken", "Brown rice", "Black beans", "Corn", "Cheese", "Avocado"],
        steps: [
            "Cook brown rice",
            "Add grilled chicken, black beans, corn, and cheese",
            "Top with avocado and serve"
        ]
    },
    {
        name: "Grilled Salmon Wrap",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/sal.jfif",
        items: ["Grilled salmon wrap", "Grilled salmon", "Whole wheat wrap", "Avocado", "Spinach", "Tomato"],
        steps: [
            "Grill salmon",
            "Assemble wrap with salmon, avocado, spinach, and tomato",
            "Serve immediately"
        ]
    },
    {
        name: "Beef Quinoa Bowl with Veggies",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/mb.jfif",
        items: ["Beef quinoa bowl", "Grilled beef", "Quinoa", "Spinach", "Bell peppers", "Olive oil"],
        steps: [
            "Cook quinoa",
            "Add grilled beef and vegetables",
            "Drizzle olive oil and serve"
        ]
    },
    {
        name: "Grilled Chicken Salad with Avocado",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/grilled%20chicken.jfif",
        items: ["Chicken salad", "Grilled chicken", "Lettuce", "Cucumber", "Tomatoes", "Avocado"],
        steps: [
            "Grill chicken",
            "Mix vegetables",
            "Add chicken and avocado slices on top",
            "Serve chilled"
        ]
    },
    {
        name: "Turkey Quinoa Salad",
        image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/turkey.jfif",
        items: ["Turkey quinoa salad", "Turkey slices", "Quinoa", "Spinach", "Cherry tomatoes", "Olive oil"],
        steps: [
            "Cook quinoa",
            "Mix with turkey and vegetables",
            "Drizzle olive oil and serve"
        ]
    }
],
dinner: [
    { name: "Grilled Chicken with Brown Rice & Broccoli", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/grilled%20chicken%20with.jfif", items: ["Grilled chicken breast", "Brown rice", "Steamed broccoli", "Olive oil"], steps: ["Grill chicken with spices", "Cook brown rice", "Steam broccoli", "Serve chicken with rice and broccoli, drizzle olive oil"] },
    { name: "Lemon Herb Salmon with Quinoa & Asparagus", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/lemon.jfif", items: ["Salmon fillet", "Quinoa", "Steamed asparagus", "Olive oil"], steps: ["Grill salmon fillet with lemon and herbs", "Cook quinoa", "Steam asparagus", "Serve together with olive oil"] },
    { name: "Beef & Vegetable Stir-Fry", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/beef.jfif", items: ["Beef stir-fry", "Beef strips", "Bell peppers", "Carrots", "Broccoli", "Soy sauce"], steps: ["Cook beef strips in pan", "Add chopped vegetables", "Stir-fry with soy sauce", "Serve hot with rice or quinoa"] },
    { name: "Chicken Pasta with Tomato Sauce & Cheese", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/chicken%20salad.jfif", items: ["Chicken pasta", "Whole wheat pasta", "Grilled chicken", "Tomato sauce", "Cheese"], steps: ["Cook pasta", "Grill chicken slices", "Mix pasta with tomato sauce and chicken", "Top with cheese and serve"] },
    { name: "Turkey Burger with Lettuce & Tomato", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/turkey.jfif", items: ["Turkey burger", "Whole grain bun", "Turkey patty", "Cheese", "Lettuce", "Tomato"], steps: ["Grill turkey patty", "Assemble burger with cheese, lettuce, tomato, and bun", "Serve hot"] },
    { name: "Grilled Shrimp with Brown Rice & Broccoli", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/fh.jfif", items: ["Grilled shrimp", "Brown rice", "Steamed broccoli", "Olive oil"], steps: ["Grill shrimp with spices", "Cook brown rice", "Steam broccoli", "Serve together with olive oil"] },
    { name: "Chicken Burrito Bowl with Avocado & Cheese", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/q.jfif", items: ["Chicken burrito bowl", "Grilled chicken", "Brown rice", "Black beans", "Corn", "Cheese", "Avocado"], steps: ["Cook brown rice", "Add grilled chicken, black beans, corn, and cheese", "Top with avocado slices and serve"] },
    { name: "Grilled Salmon Spinach Salad", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/grilled%20salmon.jfif", items: ["Salmon salad", "Grilled salmon", "Spinach", "Cucumber", "Tomatoes", "Olive oil"], steps: ["Grill salmon", "Mix vegetables in a bowl", "Top with salmon and drizzle olive oil", "Serve chilled"] },
    { name: "Beef Quinoa Bowl with Vegetables", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/beef.jfif", items: ["Beef quinoa bowl", "Grilled beef", "Quinoa", "Spinach", "Bell peppers", "Olive oil"], steps: ["Cook quinoa", "Add grilled beef and vegetables", "Drizzle olive oil and serve"] },
    { name: "Grilled Chicken Wrap with Avocado & Spinach", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/gg1.jfif", items: ["Grilled chicken wrap", "Whole wheat wrap", "Grilled chicken", "Avocado", "Spinach", "Tomatoes"], steps: ["Grill chicken slices", "Assemble wrap with chicken, avocado, spinach, and tomato", "Serve immediately"] },
    { name: "Tuna Spinach Pasta", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/tr.jfif", items: ["Tuna pasta", "Whole wheat pasta", "Tuna", "Olive oil", "Spinach"], steps: ["Cook pasta", "Mix with tuna, olive oil, and spinach", "Serve hot"] },
    { name: "Chicken & Vegetable Stir-Fry", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/chicken.jfif", items: ["Chicken stir-fry", "Chicken breast", "Broccoli", "Carrots", "Bell peppers", "Soy sauce"], steps: ["Cook chicken in pan", "Add vegetables and stir-fry with soy sauce", "Serve hot with rice or noodles"] },
    { name: "Grilled Salmon with Quinoa & Roasted VeggiesG", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/uu.jfif", items: ["Grilled salmon", "Quinoa", "Roasted vegetables", "Olive oil"], steps: ["Grill salmon", "Cook quinoa", "Roast vegetables", "Serve together with olive oil"] },
    { name: "Turkey Stir-Fry with Vegetables", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/ppp.jfif", items: ["Turkey stir-fry", "Turkey strips", "Broccoli", "Bell peppers", "Carrots", "Olive oil"], steps: ["Cook turkey strips in pan", "Add vegetables and stir-fry", "Serve hot with rice or quinoa"] },
    { name: "Chicken Quinoa Salad with Spinach & Cucumber", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/ui.jfif", items: ["Chicken quinoa salad", "Grilled chicken", "Quinoa", "Spinach", "Cucumber", "Olive oil"], steps: ["Cook quinoa", "Mix with grilled chicken and vegetables", "Drizzle olive oil and serve"] },
    { name: "Beef Pasta with Tomato Sauce & Cheese", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/we.jfif", items: ["Beef pasta", "Whole wheat pasta", "Grilled beef", "Tomato sauce", "Cheese"], steps: ["Cook pasta", "Grill beef slices", "Mix pasta with tomato sauce and beef", "Top with cheese and serve"] },
    { name: "Grilled Shrimp Quinoa Bowl with Spinach & Avocado", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/mn.jfif", items: ["Shrimp quinoa bowl", "Grilled shrimp", "Quinoa", "Spinach", "Avocado", "Olive oil"], steps: ["Cook quinoa", "Grill shrimp", "Mix quinoa with spinach and top with shrimp and avocado", "Drizzle olive oil and serve"] },
    { name: "Chicken Avocado Salad with Tomatoes & Spinach", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/qq.jfif", items: ["Chicken avocado salad", "Grilled chicken", "Avocado", "Spinach", "Tomatoes", "Olive oil"], steps: ["Grill chicken slices", "Mix with avocado and vegetables", "Drizzle olive oil and serve"] },
    { name: "Salmon Stir-Fry with Mixed Vegetables", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/salmon.jfif", items: ["Salmon stir-fry", "Grilled salmon", "Bell peppers", "Broccoli", "Carrots", "Olive oil"], steps: ["Grill salmon", "Stir-fry vegetables with olive oil", "Serve salmon on top of vegetables"] },
    { name: "Chicken Pasta Bake with Spinach & Cheese", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/chicken%20pasta.jfif", items: ["Chicken pasta bake", "Whole wheat pasta", "Grilled chicken", "Cheese", "Tomato sauce", "Spinach"], steps: ["Cook pasta", "Mix with grilled chicken, tomato sauce, and spinach", "Top with cheese and bake 15-20 minutes", "Serve hot"] }
],

snacks: [
    { name: "Mixed Nuts & Raisins", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/mix.jfif", items: ["Almonds", "Walnuts", "Cashews", "Raisins"], steps: ["Take a mix of almonds, walnuts, cashews, and raisins", "Serve as a high-calorie snack"] },
    { name: "Peanut Butter Banana Toast", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/peanut%20butter1.jfif", items: ["Peanut butter", "Whole grain bread", "Banana"], steps: ["Spread peanut butter on bread", "Add banana slices on top", "Serve immediately"] },
    { name: "Greek Yogurt with Granola & Berries", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/greek%20l.jfif", items: ["Greek yogurt", "Honey", "Granola", "Mixed berries"], steps: ["Take Greek yogurt in a bowl", "Top with granola, honey, and berries", "Serve chilled"] },
    { name: "Protein Shake with Banana & Oats", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/pro.jfif", items: ["Protein shake", "Whole milk", "Banana", "Protein powder", "Oats"], steps: ["Add all ingredients in blender", "Blend until smooth", "Serve immediately"] },
    { name: "Trail Mix with Dark Chocolate", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/tra.jfif", items: ["Trail mix", "Almonds", "Cashews", "Dark chocolate chips", "Dried fruits"], steps: ["Mix all ingredients together", "Serve as a snack for energy and calories"] },
    { name: "Boiled Eggs with Avocado Toast", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/boi.jfif", items: ["Boiled eggs", "Whole grain toast", "Avocado"], steps: ["Boil eggs and peel", "Toast bread and mash avocado on top", "Serve eggs alongside avocado toast"] },
    { name: "Cottage Cheese with Honey & Berries", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/cottage1.jfif", items: ["Cottage cheese", "Honey", "Almonds", "Berries"], steps: ["Take cottage cheese in a bowl", "Add honey, almonds, and berries", "Serve chilled"] },
    { name: "Banana & Oats Smoothie Bowl", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/ba.jfif", items: ["Smoothie bowl", "Banana", "Oats", "Almond butter", "Berries", "Almond milk"], steps: ["Blend banana, oats, almond butter, and almond milk", "Pour into bowl and top with berries", "Serve chilled"] },
    { name: "Cheese Sticks with Crackers & Apple Slices", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/cheese.jfif", items: ["Cheese sticks", "Whole grain crackers", "Apple slices"], steps: ["Serve cheese sticks with crackers and apple slices", "Perfect balanced snack for protein and carbs"] },
    { name: "Peanut Butter Energy Balls", image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/pg.jfif", items: ["Peanut butter energy balls", "Oats", "Peanut butter", "Honey", "Dark chocolate chips"], steps: ["Mix oats, peanut butter, honey, and chocolate chips", "Roll into small balls", "Serve immediately or refrigerate"] }
],
    },
   maintenance: {
    title: "🥗 Healthy Eating Plan",
    breakfast: [
        {
            name: "Banana Chia Oatmeal",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/banana%20chai.jfif",
            items: ["Oats", "Skimmed milk", "Banana", "Chia seeds", "Honey"],
            steps: [
                "Cook oats with skimmed milk",
                "Add sliced banana and chia seeds",
                "Drizzle honey and serve"
            ]
        },
        {
            name: "Berry Greek Yogurt Bowl",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/berry.jfif",
            items: ["Greek yogurt", "Granola", "Berries", "Honey"],
            steps: [
                "Take Greek yogurt in a bowl",
                "Add granola and berries",
                "Drizzle honey and serve"
            ]
        },
        {
            name: "Spinach & Tomato Egg White Omelette",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/spinich.jfif",
            items: ["Egg white omelette", "Spinach", "Tomatoes", "Olive oil"],
            steps: [
                "Beat egg whites",
                "Cook with spinach and tomatoes in olive oil",
                "Serve hot"
            ]
        },
        {
            name: "Avocado Toast with Boiled Egg",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/avocado%20toast.jfif",
            items: ["Whole grain toast", "Avocado", "Boiled egg"],
            steps: [
                "Toast the bread",
                "Mash avocado and spread",
                "Serve with boiled egg on side"
            ]
        },
        {
            name: "Banana Spinach Smoothie",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/banana%20s.jfif",
            items: ["Smoothie", "Banana", "Spinach", "Almond milk", "Oats"],
            steps: [
                "Blend all ingredients until smooth",
                "Serve chilled"
            ]
        },
        {
            name: "Peanut Butter Banana Sandwich",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/peanut%20butter1.jfif",
            items: ["Peanut butter sandwich", "Whole grain bread", "Banana"],
            steps: [
                "Spread peanut butter on bread",
                "Add banana slices",
                "Serve immediately"
            ]
        },
        {
            name: "Cottage Cheese & Berries Bowl",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/cottage%20cheese%201.jfif",
            items: ["Cottage cheese", "Berries", "Honey"],
            steps: [
                "Take cottage cheese in a bowl",
                "Add berries and drizzle honey",
                "Serve fresh"
            ]
        },
        {
            name: "Spinach Omelette Wrap",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/spinach%20%20o.jfif",
            items: ["Omelette wrap", "Eggs", "Spinach", "Whole wheat wrap"],
            steps: [
                "Cook eggs with spinach",
                "Place in whole wheat wrap",
                "Roll and serve"
            ]
        },
        {
            name: "Chia Pudding with Berries",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/chai1.jfif",
            items: ["Chia pudding", "Chia seeds", "Almond milk", "Honey", "Berries"],
            steps: [
                "Mix chia seeds with almond milk",
                "Refrigerate overnight",
                "Top with honey and berries before serving"
            ]
        },
        {
            name: "Banana Whole Wheat Pancakes",
            image: "https://uploads.onecompiler.io/43tarkw9q/44f994ntf/banana%20whole.jfif",
            items: ["Banana pancakes", "Whole wheat flour", "Eggs", "Milk", "Honey"],
            steps: [
                "Mix ingredients to make batter",
                "Cook pancakes on non-stick pan",
                "Drizzle honey and serve"
            ]
        }
    ],
    lunch: [
        {
            name: "Grilled Chicken with Brown Rice & Broccoli",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/grilled%20chicken%20with.jfif",
            items: ["Grilled chicken", "Brown rice", "Steamed broccoli", "Olive oil"],
            steps: [
                "Grill chicken",
                "Cook brown rice",
                "Steam broccoli",
                "Serve with olive oil"
            ]
        },
        {
            name: "Turkey & Avocado Sandwich",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/turkey.jfif",
            items: ["Turkey sandwich", "Whole grain bread", "Avocado", "Spinach", "Cheese"],
            steps: [
                "Assemble sandwich with ingredients",
                "Serve fresh"
            ]
        },
        {
            name: "Grilled Salmon Salad",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/aaa.jfif",
            items: ["Salmon salad", "Grilled salmon", "Lettuce", "Cucumber", "Cherry tomatoes", "Olive oil"],
            steps: [
                "Grill salmon",
                "Mix vegetables",
                "Add salmon on top",
                "Drizzle olive oil and serve"
            ]
        },
        {
            name: "Quinoa Chicken & Black Bean Bowl",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb4kena/quinoa%20chicken%20and.jfif",
            items: ["Quinoa bowl", "Grilled chicken", "Black beans", "Corn", "Avocado"],
            steps: [
                "Cook quinoa",
                "Add grilled chicken, black beans, corn",
                "Top with avocado and serve"
            ]
        },
        {
            name: "Grilled Chicken Wrap with Spinach & Avocado",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/uio.jfif",
            items: ["Chicken wrap", "Whole wheat wrap", "Grilled chicken", "Spinach", "Avocado"],
            steps: [
                "Grill chicken slices",
                "Assemble wrap with chicken, spinach, and avocado",
                "Serve immediately"
            ]
        },
        {
            name: "Beef Stir-Fry with Vegetables",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/fgh.jfif",
            items: ["Beef stir-fry", "Beef strips", "Broccoli", "Bell peppers", "Carrots", "Soy sauce"],
            steps: [
                "Cook beef strips",
                "Add vegetables and stir-fry with soy sauce",
                "Serve hot"
            ]
        },
        {
            name: "Tuna Salad with Lemon Dressing",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/tuna%20salad.jfif",
            items: ["Tuna salad", "Lettuce", "Cucumber", "Tomatoes", "Olive oil", "Lemon juice"],
            steps: [
                "Mix tuna with vegetables",
                "Add olive oil and lemon juice",
                "Serve chilled"
            ]
        },
        {
            name: "Chicken Pasta with Tomato Sauce",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/chicken%20pasta.jfif",
            items: ["Chicken pasta", "Whole wheat pasta", "Grilled chicken", "Tomato sauce", "Cheese"],
            steps: [
                "Cook pasta",
                "Add grilled chicken and tomato sauce",
                "Top with cheese and serve"
            ]
        },
        {
            name: "Grilled Shrimp with Brown Rice & Veggies",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/qwe.jfif",
            items: ["Grilled shrimp", "Brown rice", "Steamed vegetables", "Olive oil"],
            steps: [
                "Grill shrimp",
                "Cook rice and steam vegetables",
                "Serve together with olive oil"
            ]
        },
        {
            name: "Vegetable Quinoa Bowl",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/ve.jfif",
            items: ["Vegetable quinoa bowl", "Quinoa", "Spinach", "Cherry tomatoes", "Cucumber", "Olive oil"],
            steps: [
                "Cook quinoa",
                "Add vegetables",
                "Drizzle olive oil and serve"
            ]
        }
    ],
    dinner: [
        {
            name: "Grilled Chicken with Brown Rice & Broccoli",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/grilled%20chicken%20with.jfif",
            items: ["Grilled chicken", "Brown rice", "Steamed broccoli", "Olive oil"],
            steps: [
                "Grill chicken",
                "Cook brown rice",
                "Steam broccoli",
                "Serve with olive oil"
            ]
        },
        {
            name: "Baked Salmon with Quinoa & Asparagus",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/baked%20cod.jfif",
            items: ["Baked salmon", "Quinoa", "Steamed asparagus", "Olive oil"],
            steps: [
                "Bake salmon",
                "Cook quinoa",
                "Steam asparagus",
                "Serve together"
            ]
        },
        {
            name: "Chicken Stir-Fry with Vegetables",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/chicken%20stir.jfif",
            items: ["Chicken stir-fry", "Chicken breast", "Bell peppers", "Carrots", "Broccoli", "Soy sauce"],
            steps: [
                "Cook chicken in pan",
                "Add vegetables and stir-fry",
                "Serve hot"
            ]
        },
        {
            name: "Turkey Burger with Lettuce & Tomato",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/yy.jfif",
            items: ["Turkey burger", "Whole grain bun", "Turkey patty", "Lettuce", "Tomato"],
            steps: [
                "Grill turkey patty",
                "Assemble burger with lettuce and tomato",
                "Serve hot"
            ]
        },
        {
            name: "Chicken Pasta Bake",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/dd.jfif",
            items: ["Chicken pasta", "Whole wheat pasta", "Grilled chicken", "Tomato sauce", "Cheese"],
            steps: [
                "Cook pasta",
                "Add grilled chicken and tomato sauce",
                "Top with cheese and serve"
            ]
        },
        {
            name: "Grilled Shrimp with Brown Rice & Veggies",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/fr.jfif",
            items: ["Grilled shrimp", "Brown rice", "Steamed vegetables", "Olive oil"],
            steps: [
                "Grill shrimp",
                "Cook rice and steam vegetables",
                "Serve together"
            ]
        },
        {
            name: "Quinoa Chicken Bowl with Spinach & Avocado",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fb9z4pw/po.jfif",
            items: ["Quinoa bowl", "Grilled chicken", "Spinach", "Avocado", "Tomatoes", "Olive oil"],
            steps: [
                "Cook quinoa",
                "Add grilled chicken and vegetables",
                "Serve with olive oil"
            ]
        },
        {
            name: "Tuna Salad with Lemon Dressing",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/tuna%20salad.jfif",
            items: ["Tuna salad", "Lettuce", "Cucumber", "Tomatoes", "Olive oil", "Lemon juice"],
            steps: [
                "Mix tuna with vegetables",
                "Add olive oil and lemon juice",
                "Serve chilled"
            ]
        },
        {
            name: "Beef Stir-Fry with Vegetables",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/beef.jfif",
            items: ["Beef stir-fry", "Beef strips", "Bell peppers", "Carrots", "Broccoli", "Soy sauce"],
            steps: [
                "Cook beef strips",
                "Add vegetables and stir-fry",
                "Serve hot"
            ]
        },
        {
            name: "Vegetable Quinoa Bowl",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/00.jfif",
            items: ["Vegetable quinoa bowl", "Quinoa", "Spinach", "Cucumber", "Cherry tomatoes", "Olive oil"],
            steps: [
                "Cook quinoa",
                "Add vegetables",
                "Drizzle olive oil and serve"
            ]
        }
    ],
    snacks: [
        {
            name: "Nut & Raisin Mix",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/nut.jfif",
            items: ["Almonds", "Walnuts", "Cashews", "Raisins"],
            steps: [
                "Take a mix of almonds, walnuts, cashews, and raisins",
                "Serve as a healthy snack"
            ]
        },
        {
            name: "Berry Greek Yogurt",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/up.jfif",
            items: ["Greek yogurt", "Honey", "Berries"],
            steps: [
                "Take Greek yogurt in a bowl",
                "Add honey and berries",
                "Serve chilled"
            ]
        },
        {
            name: "Peanut Butter Banana Sandwich",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/peanut%20butter1.jfif",
            items: ["Peanut butter sandwich", "Whole grain bread", "Banana slices"],
            steps: [
                "Spread peanut butter on bread",
                "Add banana slices",
                "Serve immediately"
            ]
        },
        {
            name: "Boiled Eggs with Crackers",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/lp.jfif",
            items: ["Boiled eggs", "Whole grain crackers"],
            steps: [
                "Boil eggs and peel",
                "Serve with crackers"
            ]
        },
        {
            name: "Cottage Cheese with Berries & Almonds",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/ss.jfif",
            items: ["Cottage cheese", "Berries", "Almonds"],
            steps: [
                "Take cottage cheese in a bowl",
                "Add berries and almonds",
                "Serve fresh"
            ]
        },
        {
            name: "Banana Spinach Smoothie",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/mk.jfif",
            items: ["Smoothie", "Banana", "Spinach", "Almond milk", "Oats"],
            steps: [
                "Blend all ingredients until smooth",
                "Serve chilled"
            ]
        },
        {
            name: "Trail Mix with Dark Chocolate",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/bv.jfif",
            items: ["Trail mix", "Almonds", "Cashews", "Raisins", "Dark chocolate chips"],
            steps: [
                "Mix all ingredients together",
                "Serve as a quick energy snack"
            ]
        },
        {
            name: "Cheese Sticks with Apple & Crackers",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/as.jfif",
            items: ["Cheese sticks", "Whole grain crackers", "Apple slices"],
            steps: [
                "Serve cheese sticks with crackers and apple slices"
            ]
        },
        {
            name: "Peanut Butter Energy Balls",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/cv.jfif",
           items: ["Peanut butter energy balls", "Oats", "Peanut butter", "Honey", "Dark chocolate chips"],
            steps: [
                "Mix oats, peanut butter, honey, and chocolate chips",
                "Roll into small balls",
                "Serve immediately or refrigerate"
            ]
        },
        {
            name: "Hummus with Veggie Sticks",
            image: "https://uploads.onecompiler.io/43tarkw9q/44fbaut8j/y.jfif",
            items: ["Hummus", "Carrot sticks", "Cucumber sticks"],
            steps: [
                "Cut carrot and cucumber into sticks",
                "Serve with hummus"
            ]
        }
    ]
}
};
  

// --- Current selected diet ---
let currentDiet = null;

// --- Show selected diet ---
function showDiet(type) {
    currentDiet = diets[type];
    if (!currentDiet) return;

    document.getElementById('diet-title').textContent = currentDiet.title;
    document.getElementById('diet-details').classList.remove('hidden');
    document.getElementById('meal-tabs').classList.remove('hidden');

    // default tab
    filterMeal('breakfast');
}

// --- Filter meals by type ---
function filterMeal(mealType) {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    if (!currentDiet[mealType]) return;

    currentDiet[mealType].forEach(meal => {
        const card = document.createElement('div');
        card.className = 'meal-card';
        card.innerHTML = `
            <h3>${meal.name}</h3>
            <img src="${meal.image}" alt="${meal.name}">
            <button class="detail-btn">View Details</button>
        `;
        mealsContainer.appendChild(card);

        // Safe click for modal
        card.querySelector('.detail-btn').addEventListener('click', () => {
            openModal(meal.name, meal.image, meal.items, meal.steps);
        });
    });
}

// --- Modal logic ---
function openModal(name, image, items, steps) {
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-ingredients').innerHTML = items.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modal-steps').innerHTML = steps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('meal-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('meal-modal').style.display = 'none';
}

// --- Close diet section ---
function closeDiet() {
    document.getElementById('diet-details').classList.add('hidden');
    document.getElementById('meal-tabs').classList.add('hidden');
}const calForm = document.getElementById('cal-form');
const calResult = document.getElementById('calResult');

calForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('c-weight').value);
    const height = parseFloat(document.getElementById('c-height').value);
    const age = parseInt(document.getElementById('c-age').value);
    const gender = document.getElementById('c-gender').value;
    const activity = document.getElementById('c-activity').value;
    const goal = document.getElementById('c-goal').value;

    if (!weight || !height || !age) {
        calResult.innerHTML = "Please fill all fields!";
        return;
    }

    // BMR Calculation
    let bmr;
    if (gender === "Male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity multiplier
    const activityMap = {
        "Sedentary": 1.2,
        "Light": 1.375,
        "Moderate": 1.55,
        "Active": 1.725
    };

    let calories = bmr * activityMap[activity];

    // Adjust for goal
    if (goal === "Lose") calories -= 500;
    else if (goal === "Gain") calories += 500;

    calResult.innerHTML = `Your daily calories: <b>${Math.round(calories)}</b> kcal`;
});