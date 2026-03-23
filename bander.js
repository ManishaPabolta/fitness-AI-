 const chatToggle = document.getElementById('chat-toggle');
        const chatPanel = document.getElementById('chat-panel');
        const chatClose = document.getElementById('chat-close');
        const chatSend = document.getElementById('chat-send');
        const chatInput = document.getElementById('chat-input');
        const chatMsgs = document.getElementById('chat-msgs');
        const modalBg = document.getElementById('modal-bg');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        if(chatInput) {
            chatInput.style.cssText = `
                -webkit-appearance: textfield !important;
                -webkit-user-select: text !important;
                user-select: text !important;
                pointer-events: all !important;
                position: relative !important;
            `;
        }

        if(chatToggle) chatToggle.addEventListener('click', () => chatPanel.classList.toggle('active'));
        if(chatClose) chatClose.addEventListener('click', () => chatPanel.classList.remove('active'));
        if(chatSend) chatSend.addEventListener('click', sendMsg);
        if(chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') sendMsg();
            });
            chatToggle?.addEventListener('click', () => {
                if(chatPanel.classList.contains('active')) {
                    setTimeout(() => chatInput?.focus(), 300);
                }
            });
        }

        if(document.getElementById('modal-close')) {
            document.getElementById('modal-close').addEventListener('click', () => modalBg.classList.remove('show'));
        }
        modalBg.addEventListener('click', (e) => { 
            if(e.target === modalBg) modalBg.classList.remove('show'); 
        });

        // ✅ FIXED: 6 CATEGORIES x 10 EXERCISES EACH (60 Total)
        const exercises = {
            // 🔥 1. MORNING EXERCISES (10 only) 🔥
            morning: [
                {name:"Squats",type:"leg",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/image.avif"},
                {name:"Push Ups",type:"arm",time:"morning",equipment:"bodyweight",img:"https://images.unsplash.com/photo-1574676810392-6faddd3b6c32?w=300"},
                {name:"Plank",type:"abs",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(6).jpg"},
                {name:"Burpees",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/BURPEE_IMAGES_f66a9a5e-847a-4465-af28-3c9b650b1f85_480x480.webp"},
                {name:"Lunges",type:"leg",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(7).jpg"},
                {name:"Mountain Climber",type:"abs",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(8).jpg"},
                {name:"High Knees",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(9).jpg"},
                {name:"Jumping Jacks",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(10).jpg"},
                {name:"Leg Raises",type:"abs",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(11).jpg"},
                {name:"Glute Bridge",type:"leg",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(12).jpg"}
            ],

            // 🔥 2. EVENING EXERCISES (10 only) 🔥
            evening: [
                {name:"Bicep Curls",type:"arm",time:"evening",equipment:"dumbbells",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(13).jpg"},
                {name:"Deadlift",type:"back",time:"evening",equipment:"barbell",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(14).jpg"},
                {name:"Pull Ups",type:"back",time:"evening",equipment:"pullup bar",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(15).jpg"},
                {name:"Tricep Dips",type:"arm",time:"evening",equipment:"bench",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/arnold-dips.webp"},
                {name:"Shoulder Press",type:"arm",time:"evening",equipment:"dumbbells",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(17).jpg"},
                {name:"Calf Raises",type:"leg",time:"evening",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(21).jpg"},
                {name:"Russian Twist",type:"abs",time:"evening",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(18).jpg"},
                {name:"Crunches",type:"abs",time:"evening",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(18).jpg"},
                {name:"Incline Pushups",type:"arm",time:"evening",equipment:"chair",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(19).jpg"},
                {name:"Superman Hold",type:"back",time:"evening",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(20).jpg"}
            ],

            // 🔥 3. CARDIO EXERCISES (10 only) 🔥
            cardio: [
                {name:"Jump Rope",type:"cardio",time:"morning",equipment:"jump rope",img:"https://images.unsplash.com/photo-1603398937860-ddf510287c5f?w=300"},
                {name:"Burpees",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/BURPEE_IMAGES_f66a9a5e-847a-4465-af28-3c9b650b1f85_480x480.webp"},
                {name:"High Knees",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(9).jpg"},
                {name:"Jumping Jacks",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/images%20(10).jpg"},
                {name:"Mountain Climbers",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://images.unsplash.com/photo-1519741497674-611481863552?w=300"},
                {name:"Box Jumps",type:"cardio",time:"morning",equipment:"box",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/download%20(1).jpg"},
                {name:"Tuck Jumps",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fbkeah7/download%20(1).jpg"},
                {name:"Skaters",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcamh75/images%20(23).jpg"},
                {name:"Butt Kicks",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(3).jpg"},
                {name:"Star Jumps",type:"cardio",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/Star-Jumps-Muscles-Worked.jpg.webp"}
            ],

            // 🔥 4. FAT LOSS EXERCISES (10 only) 🔥
            fatloss: [
                {name:"Battle Ropes",type:"fatloss",time:"morning",equipment:"ropes",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(4).jpg"},
                {name:"Kettlebell Swings",type:"fatloss",time:"morning",equipment:"kettlebell",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(5).jpg"},
                {name:"Medicine Ball Slams",type:"fatloss",time:"morning",equipment:"med ball",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(6).jpg"},
                {name:"Battle Rope Slams",type:"fatloss",time:"morning",equipment:"ropes",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(7).jpg"},
                {name:"HIIT Burpees",type:"fatloss",time:"morning",equipment:"bodyweight",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(8).jpg"},
                {name:"Sprints",type:"fatloss",time:"morning",equipment:"track",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(9).jpg"},
                {name:"Rowing Machine",type:"fatloss",time:"morning",equipment:"rower",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(10).jpg"},
                {name:"Assault Bike",type:"fatloss",time:"morning",equipment:"bike",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(11).jpg"},
                {name:"Battle Rope Circles",type:"fatloss",time:"morning",equipment:"ropes",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(12).jpg"},
                {name:"Sandbag Carry",type:"fatloss",time:"morning",equipment:"sandbag",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(13).jpg"}
            ],

            // 🔥 5. EQUIPMENT EXERCISES (10 only) 🔥
            equipment: [
                {name:"Dumbbell Bench Press",type:"chest",time:"evening",equipment:"dumbbells",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(14).jpg"},
                {name:"Barbell Squats",type:"leg",time:"evening",equipment:"barbell",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(15).jpg"},
                {name:"Cable Flys",type:"chest",time:"evening",equipment:"cable",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(16).jpg"},
                {name:"Leg Press",type:"leg",time:"evening",equipment:"leg press",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(17).jpg"},
                {name:"Lat Pulldown",type:"back",time:"evening",equipment:"pulldown",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(19).jpg"},
                {name:"Dumbbell Rows",type:"back",time:"evening",equipment:"dumbbells",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(20).jpg"},
                {name:"Smith Machine Squats",type:"leg",time:"evening",equipment:"smith",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(21).jpg"},
                {name:"Pec Deck",type:"chest",time:"evening",equipment:"pec deck",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(22).jpg"},
                {name:"Seated Rows",type:"back",time:"evening",equipment:"cable row",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(23).jpg"},
                {name:"Hack Squats",type:"leg",time:"evening",equipment:"hack squat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(24).jpg"}
            ],

            // 🔥 6. YOGA EXERCISES (10 only) 🔥
            yoga: [
                {name:"Downward Dog",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/images%20(24).jpg"},
                {name:"Warrior II",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(25).jpg"},
                {name:"Tree Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(26).jpg"},
                {name:"Child's Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(27).jpg"},
                {name:"Cobra Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(28).jpg"},
                {name:"Bridge Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(29).jpg"},
                {name:"Seated Forward Bend",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(30).jpg"},
                {name:"Cat-Cow Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(31).jpg"},
                {name:"Triangle Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(32).jpg"},
                {name:"Corpse Pose",type:"yoga",time:"morning",equipment:"mat",img:"https://uploads.onecompiler.io/44cwzqjd6/44fcat7r8/download%20(33).jpg"}
            ]
        };

        const diet = {
            breakfast: [
                {name:"Oats Bowl",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",steps:["40g oats + 200ml milk","Cook 5 mins","Add banana + nuts"]},
                {name:"Egg Whites",img:"https://images.unsplash.com/photo-1528716321680-815a4cc4a96d?w=300",steps:["6 egg whites","Spinach + tomato","Cook 4 mins"]},
                {name:"Greek Yogurt",img:"https://images.unsplash.com/photo-1571582464855-2d164a8984d9?w=300",steps:["200g yogurt","Berries + chia","Mix well"]},
                {name:"PB Toast",img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",steps:["2 slices toast","30g PB","Banana slices"]},
                {name:"Chia Pudding",img:"https://images.unsplash.com/photo-1542994980-9f5f930e6d75?w=300",steps:["3 tbsp chia","Almond milk","Refrigerate overnight"]}
            ],
            lunch: [
                {name:"Chicken Salad",img:"https://images.unsplash.com/photo-1546793665-c74683f1b18c?w=300",steps:["150g grilled chicken","Mixed greens","Olive oil dressing"]},
                {name:"Quinoa Bowl",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",steps:["100g quinoa","Veggies steamed","Lemon dressing"]},
                {name:"Tuna Wrap",img:"https://images.unsplash.com/photo-1516534775068-ba3e7458b7e0?w=300",steps:["Tuna 100g","Wholewheat wrap","½ avocado"]},
                {name:"Paneer Bowl",img:"https://images.unsplash.com/photo-1567306221348-ce419cf45b33?w=300",steps:["150g paneer","Brown rice","Veggies"]},
                {name:"Lentil Soup",img:"https://images.unsplash.com/photo-1542994980-9f5f930e6d75?w=300",steps:["100g lentils","Carrot onion","Spices"]}
            ],
            dinner: [
                {name:"Grilled Fish",img:"https://images.unsplash.com/photo-1603373113539-5e686974b84f?w=300",steps:["150g fish","Steam broccoli","Lemon sauce"]},
                {name:"Chicken Stirfry",img:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300",steps:["150g chicken","Bell peppers","Low soy sauce"]},
                {name:"Khichdi",img:"https://images.unsplash.com/photo-1567306221348-ce419cf45b33?w=300",steps:["Rice + dal","Carrots beans","Indian spices"]},
                {name:"Egg Bhurji",img:"https://images.unsplash.com/photo-1528716321680-815a4cc4a96d?w=300",steps:["4 egg whites","Onion tomato","Spices"]},
                {name:"Tofu Scramble",img:"https://images.unsplash.com/photo-1586528116311-68a17b7ebed3?w=300",steps:["200g tofu","Spinach tomato","Turmeric"]}
            ],
            snacks: [
                {name:"Protein Shake",img:"https://images.unsplash.com/photo-1571582464855-2d164a8984d9?w=300",steps:["1 scoop protein","200ml milk","Ice blend"]},
                {name:"Mixed Nuts",img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300",steps:["10g almonds","10g walnuts","10g pista"]},
                {name:"Apple PB",img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",steps:["1 apple","20g PB","Slice & dip"]},
                {name:"Cottage Cheese",img:"https://images.unsplash.com/photo-1612839293280-e45f1e318ae8?w=300",steps:["150g cottage cheese","Pepper","Cucumber"]},
                {name:"Boiled Eggs",img:"https://images.unsplash.com/photo-1528716321680-815a4cc4a96d?w=300",steps:["2 boiled eggs","Salt pepper"]}
            ]
        };

        function addMsg(sender, text) {
            const div = document.createElement('div');
            div.className = `chat-message ${sender}`;
            div.textContent = text;
            chatMsgs.appendChild(div);
            chatMsgs.scrollTop = chatMsgs.scrollHeight;
        }

        function sendMsg() {
            const msg = chatInput.value.trim();
            if(!msg) return;
            addMsg('user', msg);
            processCmd(msg.toLowerCase());
            chatInput.value = '';
        }

        function processCmd(cmd) {
            cmd = cmd.toLowerCase().trim();
            
            // 1️⃣ Navigation
            if (cmd.includes('home') || cmd.includes('index')) {
                window.location.href = 'index.html';
                return addMsg('bot', '🏠 Going Home...');
            }
            if (cmd.includes('workout')) {
                window.location.href = 'workout.html';
                return addMsg('bot', '💪 Opening Workout...');
            }
            if (cmd.includes('diet') || cmd.includes('diet plans')) {
                window.location.href = 'diet.html';
                return addMsg('bot', '🥗 Opening Diet Plans...');
            }
            if (cmd.includes('dashboard')) {
                window.location.href = 'dashboard.html';
                return addMsg('bot', '📊 Opening Dashboard...');
            }

            // ✅ FIXED: EXACT 10 EXERCISES PER CATEGORY ONLY
            // 2️⃣ TIME-BASED (सिर्फ morning/evening - exactly 10 each)
            if (cmd.includes('morning') || cmd.includes('morning exercise')) {
                const result = exercises.morning; // Exactly 10
                showResults(`🌅 Morning Exercises (${result.length})`, result);
                return addMsg('bot', `🌅 Exactly 10 Morning workouts shown!`);
            }
            if (cmd.includes('evening') || cmd.includes('evening exercise')) {
                const result = exercises.evening; // Exactly 10
                showResults(`🌙 Evening Exercises (${result.length})`, result);
                return addMsg('bot', `🌙 Exactly 10 Evening workouts shown!`);
            }

            // 3️⃣ SPECIFIC TYPES (exactly 10 each)
            if (cmd.includes('cardio')) {
                const result = exercises.cardio; // Exactly 10
                showResults(`⚡ Cardio (${result.length})`, result);
                return addMsg('bot', `⚡ Exactly 10 Cardio exercises shown!`);
            }
            if (cmd.includes('fat loss') || cmd.includes('fatloss') || cmd.includes('fat burn')) {
                const result = exercises.fatloss; // Exactly 10
                showResults(`🔥 Fat Loss (${result.length})`, result);
                return addMsg('bot', `🔥 Exactly 10 Fat loss exercises shown!`);
            }
            if (cmd.includes('yoga')) {
                const result = exercises.yoga; // Exactly 10
                showResults(`🧘 Yoga (${result.length})`, result);
                return addMsg('bot', `🧘 Exactly 10 Yoga poses shown!`);
            }

            // 4️⃣ EQUIPMENT (exactly 10)
            if (cmd.includes('equipment') || cmd.includes('gym') || cmd.includes('weights')) {
                const result = exercises.equipment; // Exactly 10
                showResults(`⚙️ Equipment Workouts (${result.length})`, result);
                return addMsg('bot', `⚙️ Exactly 10 Gym exercises shown!`);
            }

            // 5️⃣ BODY PARTS (filter from ALL but show relevant)
            const parts = {
                'leg': exercises.morning.filter(e => e.type === 'leg').concat(exercises.evening.filter(e => e.type === 'leg')),
                'arm': exercises.morning.filter(e => e.type === 'arm').concat(exercises.evening.filter(e => e.type === 'arm')),
                'abs': exercises.morning.filter(e => e.type === 'abs').concat(exercises.evening.filter(e => e.type === 'abs')),
                'back': exercises.evening.filter(e => e.type === 'back'),
                'chest': exercises.equipment.filter(e => e.type === 'chest')
            };
            
            for(let [part, result] of Object.entries(parts)) {
                if(cmd.includes(part)) {
                    showResults(`${part.toUpperCase()} Workouts (${result.length})`, result.slice(0,10));
                    return addMsg('bot', `${part.toUpperCase()} 💪 (${result.length}) exercises shown!`);
                }
            }

            // 6️⃣ MEALS
            const meals = ['breakfast','lunch','dinner','snack','snacks'];
            for(let meal of meals) {
                if(cmd.includes(meal)) {
                    const key = meal === 'snacks' ? 'snacks' : meal;
                    showResults(`${meal.charAt(0).toUpperCase()+meal.slice(1)} Meals`, diet[key]);
                    return addMsg('bot', `${meal.toUpperCase()} 🍽️ shown!`);
                }
            }

            // 7️⃣ Help
            if (cmd.includes('hello') || cmd.includes('hi') || cmd.includes('help')) {
                return addMsg('bot', `💪 Commands:\n• "morning exercise"\n• "evening exercise"\n• "cardio"\n• "yoga"\n• "fat loss"\n• "gym"\n• "leg"\n• "breakfast"`);
            }

            addMsg('bot', `🔍 Try: "morning exercise" • "cardio" • "yoga" • "fat loss" • "gym" • "breakfast"`);
        }

        function showResults(title, items) {
            modalTitle.textContent = title;
            modalBody.innerHTML = items.map(item => `
                <div class="ex-card">
                    <h3>${item.name}</h3>
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/350x350/2ed573/fff?text=${item.name}'">
                    <div class="tags">
                        <span class="type-tag">${item.type}</span>
                        <span class="equip-tag">${item.equipment}</span>
                        ${item.time ? `<span class="time-tag">${item.time}</span>` : ''}
                    </div>
                </div>
            `).join('');
            modalBg.classList.add('show');
        }

        console.log('✅ FIXED: Exactly 10 exercises per category! No duplicates/mixing.');