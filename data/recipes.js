// data/recipes.js
export const recipeData = {
  coffee: [
    {
      id: 'coffee_1',
      name: 'Affogato',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Italian coffee dessert with hot espresso over gelato',
      ingredients: [
        '½ cup (1–2 scoops) premium vanilla gelato or ice cream',
        '1 oz freshly pulled hot espresso',
        '1 tsp crushed amaretti or biscotti (optional)',
        '1 tsp shaved chocolate (optional)',
        '1 tsp liqueur - amaretto, Frangelico, or Kahlúa (optional)'
      ],
      instructions: [
        'Chill your coupe or small glass for a minute',
        'Gently scoop gelato, placing it centrally in the glass',
        'Pull a short, rich shot of espresso (1 oz)',
        'Pour espresso directly over gelato in one smooth motion',
        'Sprinkle with crushed amaretti or chocolate if desired',
        'Add a spoon and serve immediately'
      ],
      tips: 'Softened gelato (5 min at room temp) helps achieve stronger melt contrast. Chill glassware ahead for better visual presentation.',
      nutrition: { calories: 120, caffeine: '63mg' }
      
    },
    
    {
      id: 'coffee_2',
      name: 'Banana Cold Foam Coffee',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '10 min',
      servings: 1,
      description: 'Trendy whipped banana-cream coffee with tropical twist',
      ingredients: [
        '8 oz high-quality cold brew or strong iced coffee',
        '¾ ripe banana (mashed)',
        '2 Tbsp heavy cream or coconut cream',
        '1 Tbsp banana syrup or brown sugar',
        '1 tsp orgeat syrup (optional)',
        'Ice cubes'
      ],
      instructions: [
        'Fill glass ¾ with ice and pour cold brew',
        'In blender, combine banana, cream, syrup, and orgeat',
        'Blend until light and frothy (about 1 minute)',
        'Spoon thick foam on coffee',
        'Swirl to create layers and serve immediately'
      ],
      tips: 'Adjust foam sweetness to taste; orgeat adds nutty depth. Pour coffee before topping foam for vivid contrast.',
      nutrition: { calories: 180, caffeine: '95mg' }
    },
    {
      id: 'coffee_3',
      name: 'Thai Iced Coffee (Oliang)',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '10 min',
      servings: 1,
      description: 'Sweet, spice-laden Thai street coffee with condensed milk',
      ingredients: [
        '3 Tbsp Thai coffee blend (robusta + grains/roasted seeds/cardamom)',
        '8 oz hot water',
        '2 Tbsp sweetened condensed milk',
        '2 Tbsp evaporated milk (optional)',
        'Pinch fine salt and ¼ tsp almond or cardamom extract (optional)',
        'Large handful of ice'
      ],
      instructions: [
        'Pour hot water over Thai blend in dripper or press',
        'Steep 4-6 minutes, then strain',
        'Stir in condensed and evaporated milk until dissolved',
        'Add salt/extract if using',
        'Fill glass with ice and pour coffee slowly',
        'Add straw, stir, and serve cold'
      ],
      tips: 'Thai coffee is sweet-forward—don\'t skimp on condensed milk. Optional spices give authentic aroma.',
      nutrition: { calories: 200, caffeine: '120mg' }
    },
    {
      id: 'coffee_4',
      name: 'Vietnamese Iced Coffee (Cà phê sữa đá)',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '6 min',
      servings: 1,
      description: 'Strong drip-coffee with sweetened condensed milk',
      ingredients: [
        '2 Tbsp sweetened condensed milk',
        '2 Tbsp medium-coarse dark roast (Vietnamese style)',
        '3 oz hot water for dripping',
        'Ice (glass full)'
      ],
      instructions: [
        'Spoon condensed milk into bottom of tall glass',
        'Add grounds to phin filter, tamp lightly',
        'Pour hot water to bloom, then fill and wait 4-5 min for drip',
        'Remove filter and stir until coffee-condensed milk blends',
        'Pour over ice and serve with straw'
      ],
      tips: 'Medium-coarse grind prevents over-extraction. Blooming grounds creates richer flavor.',
      nutrition: { calories: 150, caffeine: '100mg' }
    },
    {
      id: 'coffee_5',
      name: 'Café de Olla',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '10 min',
      servings: '4-6 cups',
      description: 'Traditional Mexican spiced pot coffee with cinnamon and piloncillo',
      ingredients: [
        '9 cups water',
        '6 Tbsp coarsely ground dark roast (preferably Mexican)',
        '4 oz piloncillo or ½ cup packed dark brown sugar',
        '2 whole cinnamon sticks',
        '1 star anise',
        '1 tsp whole cloves (4-6)',
        'Orange peel (optional)',
        '½ tsp ground anise (optional)'
      ],
      instructions: [
        'In pot, combine water, piloncillo, cinnamon, anise, cloves',
        'Bring to gentle boil (~5 min), stirring to dissolve sugar',
        'Add coffee grounds; reduce heat to simmer for 5 min, stirring',
        'Remove from heat and let sit 5 min to meld flavors',
        'Strain into cups and serve hot',
        'Add cinnamon stick for garnish'
      ],
      tips: 'Use clay olla for authentic earthy undertones. Let sit off heat for 5 min to meld flavors.',
      nutrition: { calories: 80, caffeine: '85mg' }
    }
  ],

  tea: [
    {
      id: 'tea_1',
      name: 'Classic Citrus & Mint Iced Tea',
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '20 min',
      servings: 8,
      description: 'Refreshing black tea with citrus and fresh mint',
      ingredients: [
        '4 black tea bags (English Breakfast)',
        '8 fresh mint sprigs',
        '4 cups boiling water',
        '½ cup fresh lemon juice',
        '¼ cup fresh lime juice',
        '½ cup fresh orange juice',
        '8 tsp sugar or sweetener to taste',
        'Ice, lemon/lime/orange slices, mint sprigs for garnish'
      ],
      instructions: [
        'Pour boiling water into pitcher',
        'Add tea bags and mint, cover, steep 10 minutes',
        'Remove bags and mint sprigs',
        'Stir in citrus juices and sugar until dissolved',
        'Add ice and garnish slices',
        'Serve over ice with fresh mint sprigs'
      ],
      tips: 'Use hot-brew + ice method to lock in bright flavor and chill quickly',
      nutrition: { calories: 25, caffeine: '25mg' }
    },
    {
      id: 'tea_2',
      name: 'Ginger Beer Tea',
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '20 min + chill',
      servings: 6,
      description: 'Spicy sparkling tea with ginger syrup',
      ingredients: [
        '1 cup water',
        '2 Tbsp grated fresh ginger',
        '1 cup sugar',
        '7 cups water',
        '1/8 tsp active dry yeast',
        '3 Tbsp fresh lemon juice',
        'Ice, lemon slices for garnish'
      ],
      instructions: [
        'Simmer water + sugar + ginger until sugar dissolves (5 min)',
        'Cool slightly, transfer syrup to jar',
        'Stir in yeast + water + lemon juice, cover loosely',
        'Let sit 24 hrs; transfer to bottles and refrigerate 1-2 days',
        'Serve over ice with lemon garnish',
        'For non-fermented version: dilute syrup with soda water'
      ],
      tips: 'Fermentation creates natural fizz. Adjust ginger to taste preference.',
      nutrition: { calories: 45, caffeine: '0mg' }
    },
    {
      id: 'tea_3',
      name: 'Herbal Cordial Tea',
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1597318281675-b4b9a729adcf?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '10 min + 24hr infusion',
      servings: 6,
      description: 'Elderflower or rhubarb infused sparkling tea',
      ingredients: [
        '30-40 elderflower heads (fresh) or ¼ cup dried elderflowers',
        '6 cups boiling water',
        '1-2 cups sugar to taste',
        'Juice of 3 lemons',
        '1½ tsp citric acid (optional, for preservation)',
        'Sparkling water, ice for serving'
      ],
      instructions: [
        'Pour hot water over flowers; steep 12 hrs at room temp',
        'Strain and remove flowers; measure infusion',
        'Return to pot, add equal sugar by volume + lemon juice + citric acid',
        'Simmer 5 minutes, cool, and bottle',
        'Mix 1:4 cordial-to-sparkling-water over ice',
        'Garnish with mint or lemon'
      ],
      tips: 'Citric acid helps preserve cordial. Store in refrigerator up to 1 month.',
      nutrition: { calories: 35, caffeine: '0mg' }
    },
    {
      id: 'tea_4',
      name: 'Mint & Mango Iced Green Tea',
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '20 min + 3hr chill',
      servings: 4,
      description: 'Tropical green tea with fresh mango and mint',
      ingredients: [
        '10 green tea bags or 4 tsp loose leaf',
        '12 mint sprigs (plus extra for garnish)',
        '2 ripe mangos (peeled, pitted)',
        '8 cups water (4 hot + 4 cold)',
        '½ cup sugar',
        '2 Tbsp lime juice',
        'Ice, lime slices, mint for garnish'
      ],
      instructions: [
        'Steep tea + 4 mint sprigs in 4 cups hot water (2-3 min)',
        'Remove tea and mint, add 4 cups cold water',
        'Blend mango + sugar + lime juice until smooth',
        'Mix tea with mango puree; chill at least 3 hours',
        'Serve over ice with mint and lime garnish'
      ],
      tips: 'Don\'t over-steep green tea to avoid bitterness. Fresh mango gives best flavor.',
      nutrition: { calories: 65, caffeine: '15mg' }
    },
    {
      id: 'tea_5',
      name: 'Golden Pineapple & Vanilla Iced Tea',
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '35 min + chill',
      servings: '2-3',
      description: 'Tropical vanilla-infused tea with pineapple',
      ingredients: [
        '1 vanilla bean (split)',
        'Peels/cores from small pineapple (~2 cups chunks)',
        '4 cups water',
        '1 English Breakfast or green tea bag',
        '1 Tbsp golden syrup or honey',
        'Ice, mint sprig for garnish'
      ],
      instructions: [
        'Boil pineapple peels + vanilla in water',
        'Simmer 30 minutes until reduced',
        'Remove pot from heat; add tea bag; steep 5 minutes',
        'Remove solids; stir in honey; cool',
        'Strain into pitcher and chill',
        'Serve over ice with mint sprig'
      ],
      tips: 'Save pineapple flesh for eating. Vanilla bean can be reused 2-3 times.',
      nutrition: { calories: 40, caffeine: '20mg' }
    }
  ],

  matcha: [
    {
      id: 'matcha_1',
      name: 'Traditional Matcha Tea',
      category: 'matcha',
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '5 min',
      servings: 1,
      description: 'Pure ceremonial matcha prepared the traditional way',
      ingredients: [
        '1 tsp ceremonial-grade matcha powder (sifted)',
        '2-3 oz hot water (175°F / 80°C)'
      ],
      instructions: [
        'Sift matcha into bowl to remove clumps',
        'Add hot water to matcha',
        'Whisk briskly in "W" or zig-zag pattern using bamboo whisk',
        'Continue whisking until frothy and smooth',
        'Transfer to cup and serve immediately'
      ],
      tips: 'Use correct temperature to avoid bitterness. Whisk vigorously for smooth texture and microfoam.',
      nutrition: { calories: 5, caffeine: '35mg' }
    },
    {
      id: 'matcha_2',
      name: 'Matcha Latte',
      category: 'matcha',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Creamy matcha with steamed milk',
      ingredients: [
        '1-2 TSP MATCHA POWDER (CEREMONIAL OR CULINARY GRADE)',
        '⅓ cup hot water (~175°F)',
        '¾ cup milk (dairy or plant-based)',
        'Sweetener to taste (optional)'
      ],
      instructions: [
        'Sift matcha powder into bowl',
        'Add hot water and whisk until smooth slurry forms',
        'Steam or froth milk to 140-160°F until velvety foam forms',
        'Pour steamed milk into whisked matcha while whisking gently',
        'Spoon foam on top, dust with matcha if desired',
        'Serve immediately'
      ],
      tips: 'Froth temperature and pouring technique are key to latte art quality.',
      nutrition: { calories: 80, caffeine: '35mg' }
    },
    {
      id: 'matcha_3',
      name: 'Iced Matcha Latte',
      category: 'matcha',
      image: 'https://images.unsplash.com/photo-1556909114-4f6e3ba66d96?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '10 min',
      servings: 1,
      description: 'Refreshing cold matcha with milk over ice',
      ingredients: [
        '1 tsp ceremonial matcha',
        '¼ cup hot water',
        '1 cup milk (dairy or plant-based)',
        'Ice cubes',
        '1 tsp maple syrup or simple syrup (optional)'
      ],
      instructions: [
        'Sift matcha and whisk with hot water until smooth',
        'Optional: place slurry in fridge 10-15 minutes to chill',
        'Fill glass with ice and pour in milk',
        'Gently pour matcha over milk to create layers',
        'Add syrup if desired, swirl gently',
        'Garnish with mint and serve'
      ],
      tips: 'Use bamboo whisk for silky texture. Chill slurry to enhance visual contrast.',
      nutrition: { calories: 70, caffeine: '35mg' }
    },
    {
      id: 'matcha_4',
      name: 'Matcha Frappé',
      category: 'matcha',
      image: 'https://images.unsplash.com/photo-1578922825215-1aaec8e87abc?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Blended frozen matcha drink',
      ingredients: [
        '2 tsp matcha powder',
        '4 oz milk',
        '1 Tbsp simple syrup',
        '1 cup crushed ice'
      ],
      instructions: [
        'Whisk matcha with splash of milk/water to create slurry',
        'Combine slurry, remaining milk, syrup, and ice in blender',
        'Blend until smooth and frothy',
        'Pour into tall glass',
        'Top with foam cap and serve immediately'
      ],
      tips: 'Use cold milk for better blending. Add ice gradually for desired consistency.',
      nutrition: { calories: 85, caffeine: '70mg' }
    },
    {
      id: 'matcha_5',
      name: 'Matcha Smoothie',
      category: 'matcha',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Healthy matcha smoothie with banana and greens',
      ingredients: [
        '1 tsp matcha',
        '1 banana',
        '1 cup spinach (optional)',
        '½ cup Greek yogurt or plant-based alternative',
        '½ cup milk or juice',
        'Ice cubes',
        'Honey to taste (optional)'
      ],
      instructions: [
        'Combine all ingredients in blender',
        'Blend until creamy and smooth',
        'Add ice for desired consistency',
        'Pour into glass',
        'Sprinkle matcha dust on top for garnish'
      ],
      tips: 'Spinach adds nutrition without affecting taste. Frozen banana creates creamier texture.',
      nutrition: { calories: 180, caffeine: '35mg' }
    }
  ],

  mocktails: [
    {
      id: 'mocktail_1',
      name: 'Non-Alcoholic Espresso Martini',
      category: 'mocktails',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '15 min',
      servings: 1,
      description: 'Sophisticated alcohol-free version of the classic cocktail',
      ingredients: [
        '2 oz chilled espresso',
        '1.5 oz non-alcoholic spirit (e.g., Seedlip Spice 94)',
        '1 oz brown sugar syrup*',
        'Ice',
        '3 coffee beans for garnish',
        '*Syrup: ¾ cup water + 1 cup brown sugar + ½ tsp vanilla'
      ],
      instructions: [
        'Make syrup: boil water + brown sugar; stir in vanilla; cool',
        'Chill martini glass in fridge 10 minutes',
        'In shaker, combine espresso, spirit, syrup with ice',
        'Shake vigorously for 45 seconds',
        'Fine strain into glass; shake again without ice to build foam',
        'Float 3 coffee beans on foam'
      ],
      tips: 'Dry shake enhances foam; fresh espresso gives best crema.',
      nutrition: { calories: 85, caffeine: '63mg' }
    },
    {
      id: 'mocktail_2',
      name: 'Virgin Bloody Mary',
      category: 'mocktails',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '10 min',
      servings: 1,
      description: 'Classic brunch cocktail without the alcohol',
      ingredients: [
        '6 oz tomato juice',
        '½ oz lemon juice',
        '2 dashes Worcestershire sauce',
        '2 dashes hot sauce',
        'Pinch celery salt & black pepper',
        'Ice',
        'Celery stalk + lemon wedge garnish'
      ],
      instructions: [
        'Combine tomato juice, lemon juice, Worcestershire, hot sauce in shaker',
        'Add spices and ice',
        'Roll (don\'t shake) for 10 seconds to mix',
        'Strain into ice-filled glass',
        'Garnish with celery stalk and lemon wedge'
      ],
      tips: 'Rolling preserves tomato juice texture. Adjust spices to taste preference.',
      nutrition: { calories: 35, caffeine: '0mg' }
    },
    {
      id: 'mocktail_3',
      name: 'Watermelon-Lime Kombucha Cooler',
      category: 'mocktails',
      image: 'https://images.unsplash.com/photo-1556881286-e6baecced18d?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '10 min',
      servings: 1,
      description: 'Refreshing probiotic drink with watermelon',
      ingredients: [
        '1 cup watermelon cubes',
        '½ lime, juiced',
        '4 oz plain or flavored kombucha',
        'Ice',
        'Mint sprig for garnish'
      ],
      instructions: [
        'Puree watermelon and lime juice until smooth',
        'Fill glass with ice',
        'Pour watermelon puree until glass is ⅔ full',
        'Gently pour kombucha over to top',
        'Garnish with mint sprig'
      ],
      tips: 'Strain puree if you prefer smooth texture. Choose complementary kombucha flavors.',
      nutrition: { calories: 45, caffeine: '0mg' }
    },
    {
      id: 'mocktail_4',
      name: 'No-Alcohol Moscow Mule',
      category: 'mocktails',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Spicy ginger drink in traditional copper mug',
      ingredients: [
        '½ oz lime juice',
        '4 oz ginger beer (non-alcoholic)',
        '1 oz non-alcoholic spirit (optional)',
        'Ice',
        'Lime wheel + mint sprig for garnish'
      ],
      instructions: [
        'Fill copper mug with ice',
        'Add lime juice and non-alcoholic spirit if using',
        'Top with ginger beer',
        'Stir gently to combine',
        'Garnish with lime wheel and mint sprig'
      ],
      tips: 'Copper mug keeps drink extra cold. Choose spicy ginger beer for authentic taste.',
      nutrition: { calories: 50, caffeine: '0mg' }
    },
    {
      id: 'mocktail_5',
      name: 'Sleepy Girl Mocktail',
      category: 'mocktails',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Viral wellness drink with tart cherry juice',
      ingredients: [
        '4 oz tart cherry juice',
        '¼ tsp magnesium powder (optional)',
        '4 oz lemon-lime soda or seltzer',
        'Ice'
      ],
      instructions: [
        'In glass, stir cherry juice with magnesium powder until dissolved',
        'Add ice to fill glass',
        'Gently pour soda or seltzer over ice',
        'Stir minimally to preserve fizz',
        'Serve with calming ambiance'
      ],
      tips: 'Tart cherry juice naturally contains melatonin. Best consumed 30-60 minutes before bed.',
      nutrition: { calories: 60, caffeine: '0mg' }
    }
  ],

  iced: [
    {
      id: 'iced_1',
      name: 'Perfect Iced Coffee',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min + 8-12hr steep',
      servings: 1,
      description: 'Cold-brew concentrate for the perfect iced coffee base',
      ingredients: [
        '1 cup coarsely ground dark-roast coffee',
        '4 cups filtered cold water',
        'Ice',
        'Milk or sweetened condensed milk (optional)'
      ],
      instructions: [
        'Add grounds to jar, pour water, stir to saturate',
        'Cover jar, rest at room temperature 8-12 hours',
        'Strain through fine-mesh strainer or cheesecloth',
        'Fill glass ¾ with ice, pour concentrate',
        'Optionally dilute 1:1 with water',
        'Stir in milk/sweetener and serve with straw'
      ],
      tips: 'Coarse grind prevents over-extraction. Store concentrate in fridge up to 1 week.',
      nutrition: { calories: 5, caffeine: '200mg' }
    },
    {
      id: 'iced_2',
      name: 'Coconut Mocha Iced Coffee',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '15 min',
      servings: 1,
      description: 'Tropical chocolate coffee with coconut milk',
      ingredients: [
        '6 oz cold-brew coffee',
        '1 Tbsp cream of coconut OR coconut simple syrup',
        '1 Tbsp chocolate syrup',
        '½ Tbsp caramel syrup',
        '4 oz milk + 2 oz coconut milk',
        'Crushed ice',
        'Whipped cream, toasted coconut, drizzle (optional)'
      ],
      instructions: [
        'Drizzle chocolate + caramel inside glass for stripes',
        'Fill glass ⅔ with crushed ice',
        'Froth milk + coconut milk until foamy',
        'Pour frothed milk over ice',
        'Slowly pour coffee, swirl gently',
        'Top with whipped cream, toasted coconut, chocolate drizzle'
      ],
      tips: 'Layer slowly for visual effect. Highlight swirling layers in presentation.',
      nutrition: { calories: 200, caffeine: '120mg' }
    },
    {
      id: 'iced_3',
      name: 'Coffee Ice Cubes Iced Coffee',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '10 min',
      servings: 1,
      description: 'Prevents dilution with coffee ice cubes',
      ingredients: [
        '1 cup strong hot-brewed coffee (chilled)',
        'Coffee ice cubes (coffee frozen in ice tray)',
        'Milk of choice',
        'Sweetener (optional)'
      ],
      instructions: [
        'Freeze strong coffee in ice cube trays',
        'Add coffee cubes to glass',
        'Pour chilled coffee over ice cubes',
        'Add milk and sweetener if desired',
        'Stir lightly and serve immediately'
      ],
      tips: 'Coffee cubes prevent dilution while maintaining flavor strength.',
      nutrition: { calories: 10, caffeine: '95mg' }
    },
    {
      id: 'iced_4',
      name: 'Banana Milk Coffee',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: 1,
      description: 'Creamy tropical coffee with banana milk',
      ingredients: [
        '1 cup cold-brew coffee or cooled strong brew',
        '½ cup banana milk (or mashed ripe banana + milk)',
        'Ice cubes',
        'Honey or sugar to taste (optional)'
      ],
      instructions: [
        'If making fresh: blend banana with milk until smooth',
        'Fill glass with ice',
        'Pour coffee over ice',
        'Layer banana milk over coffee',
        'Stir gently to combine and sweeten if desired'
      ],
      tips: 'Ripe banana provides natural sweetness. Creates beautiful swirling effect.',
      nutrition: { calories: 120, caffeine: '95mg' }
    },
    {
      id: 'iced_5',
      name: 'Dalgona-Style Whipped Iced Coffee',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300&h=300&fit=crop',
      difficulty: 'Medium',
      prepTime: '10 min',
      servings: 1,
      description: 'Viral whipped coffee over cold milk',
      ingredients: [
        '2 Tbsp instant coffee',
        '2 Tbsp sugar',
        '2 Tbsp hot water',
        '1 cup milk',
        'Ice cubes'
      ],
      instructions: [
        'Vigorously whip coffee, sugar, water until fluffy peaks form (5-7 min)',
        'Fill glass ¾ with ice',
        'Pour milk over ice',
        'Spoon whipped coffee over milk like soft scoop',
        'Serve with straw; stir gradually when drinking'
      ],
      tips: 'Electric mixer speeds up process. Focus on frothy texture contrast.',
      nutrition: { calories: 140, caffeine: '63mg' }
    }
  ]
};

// Helper function to get recipes by category
export const getRecipesByCategory = (category) => {
  return recipeData[category] || [];
};

// Helper function to get all recipes
export const getAllRecipes = () => {
  return Object.values(recipeData).flat();
};

// Helper function to search recipes
export const searchRecipes = (query) => {
  const allRecipes = getAllRecipes();
  return allRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(query.toLowerCase()) ||
    recipe.description.toLowerCase().includes(query.toLowerCase()) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(query.toLowerCase())
    )
  );
};

// Helper function to get recipe by ID
export const getRecipeById = (id) => {
  const allRecipes = getAllRecipes();
  return allRecipes.find(recipe => recipe.id === id);
};
export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};

// Helper function to add a new review
export const addReview = (recipeId, review) => {
  const recipe = getRecipeById(recipeId);
  if (recipe) {
    recipe.reviews = recipe.reviews || [];
    recipe.reviews.unshift({
      ...review,
      id: `review_${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    });
    recipe.averageRating = calculateAverageRating(recipe.reviews);
    recipe.reviewCount = recipe.reviews.length;
  }
};