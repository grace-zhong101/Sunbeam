const encounter = {
    text: "Welcome to the bakery!",
    text: "Unfortunately, it's my first day on the job so all I have is moldy bagels. Would help me learn to make a cake?",
    choices: [
        {
            text: "Sure, I'd love to help!",
            result: "Great! let's get started. What do we need first?"
        },
        {
            text: "Sorry, I'm not interested.",
            result: "Wrong answer pal! You're helping me make a cake."
        }
    ]
    text: "I have no idea how to bake a cake, so I’m gonna need a recipe first. Lets look around the kitchen to see if there’s one around.",
    
    //code for pressing recipe in hidden in kitchen

    text: "We found it! It looks like a recipe for strawberry shortcake.",
    choices: [
        {
            text: "Sounds yummy!",
            result: "Great! I love strawberries too."
        }
        {
            text: "Ewww! I hate strawberry shortcake :(",
            result: "Well that's too bad, because that's what we're gonna make!"
        }
    ]
    text: "Okay, let's read over the recipe first.",
    choices: [
        {
            text: "Wait, I don't know how to bake, but it looks all wrong! Why does it say to put the strawberries on the cake before we even bake it??",
            result: "Oh wait! You're right. I think we need to unscramble it!"
        }
        {
            text: "Okay, looks good to me! Let's go to the supermarket and grab the ingredients.",
            result: "No, dummy! It's obviously all wrong. We need to unscramble the steps first!"

        }
    ]

    //code for unscrambling the recipe

    text: "Perfecto! Now that the recipe is in order, let's head to the supermarket to get the ingredients.",
    text: "After a long ride. . .",
    text: "Okay, we made it to the supermarket, but now we need to find all the ingredients.",
    text: "I made a shopping list with all the ingredients and how much of each we need.",
    choices: [
        {
            text: "Yay! I'm ready.",
            result: "Great! Let's start with the dairy section."
        }
        {
            text: "I'm so tired after the ride though... Can we take a break first?",
            result: "Awwww, that's too bad for you. We need to get started, lazybones!"
        }
    ]
    text: "Hmmm, where could the dairy section be?",

    /* code for finding the dairy section
    maybe a thing where you have to click on the right aisle? */

    text: "We found the dairy section! Now, let's check the ingredients on the list to see what we need for here."
    choices: [
        {
            text: "We need eggs, milk, butter, heavy cream, half-and-half.",
            result: "Yup! Sounds right."
        }
        {
            text: "We need flour, sugar, baking powder, vanilla extract, powdered sugar.",
            result: "Wrong, stupid! Those are all in the baking section. The eggs, milk, butter, heavy cream, half-and-half should be here."
        }
    ]
    text: "Wow, this fridge door is so hard to open!",
    
    //code for opening the fridge door

    text: "Awesome! We got all the ingredients from here.",
    text: "Now, we gotta head to the produce section to find the strawberries.",
    
    //same code as the finding the dairy section

    text: "Okay, help me find the best strawberries here. No moldy fruits allowed!",

    //code to choose the best strawberries

    text: "Great! We're almost done. We just gotta get to the baking aisle for the rest of the ingredients.",

    //same code as the finding the dairy section

    text: "Oh no! So many of the ingredients are on the top shelf! I can't reach them. We're gonna need to jump!",

    //code for jumping to reach the ingredients

    text: "Awesome! We got all the ingredients we need. Now, let's head back to the bakery and start baking!",
    text: "After the ride back. . .",
    



}
