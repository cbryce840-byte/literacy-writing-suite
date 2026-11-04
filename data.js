const masterPools = {
    softC: [
        {sentence: ["He", "can", "ride", "his", "cycle", "fast."]},
        {sentence: ["The", "city", "has", "tall", "buildings."]},
        {sentence: ["A", "shiny", "penny", "is", "one", "cent."]},
        {sentence: ["She", "has", "a", "happy", "face."]},
        {sentence: ["The", "cold", "ice", "is", "in", "the", "cup."]},
        {sentence: ["We", "eat", "warm", "rice", "for", "dinner."]},
        {sentence: ["They", "love", "to", "dance", "together."]},
        {sentence: ["Draw", "a", "round", "red", "circle."]},
        {sentence: ["Three", "little", "mice", "ran", "away."]},
        {sentence: ["The", "fast", "car", "won", "the", "race."]},
        {sentence: ["Write", "your", "name", "with", "a", "pencil."]},
        {sentence: ["It", "is", "nice", "to", "share", "toys."]},
        {sentence: ["This", "is", "a", "fun", "place", "to", "play."]},
        {sentence: ["The", "rocket", "flew", "into", "space."]},
        {sentence: ["What", "is", "the", "price", "of", "the", "book?"]},
        {sentence: ["Take", "a", "slice", "of", "sweet", "cake."]},
        {sentence: ["I", "eat", "cereal", "every", "morning."]},
        {sentence: ["We", "saw", "clowns", "at", "the", "circus."]},
        {sentence: ["The", "quiet", "park", "gives", "us", "peace."]},
        {sentence: ["Sing", "with", "a", "clear", "loud", "voice."]},
        {sentence: ["Bounce", "the", "big", "red", "ball."]},
        {sentence: ["The", "kind", "prince", "wore", "a", "crown."]},
        {sentence: ["The", "princess", "lived", "in", "a", "castle."]},
        {sentence: ["A", "battery", "is", "a", "power", "cell."]},
        {sentence: ["Stand", "right", "in", "the", "center."]},
        {sentence: ["We", "watch", "movies", "at", "the", "cinema."]},
        {sentence: ["She", "wore", "a", "fancy", "party", "dress."]},
        {sentence: ["Put", "tasty", "sauce", "on", "the", "pasta."]},
        {sentence: ["Drink", "a", "glass", "of", "orange", "juice."]},
        {sentence: ["Use", "a", "crayon", "to", "trace", "letters."]}
    ],
    softG: [
        {sentence: ["The", "shiny", "gem", "is", "bright", "red."]},
        {sentence: ["The", "bird", "is", "in", "the", "cage."]},
        {sentence: ["The", "friendly", "giant", "is", "very", "tall."]},
        {sentence: ["He", "performed", "a", "cool", "magic", "trick."]},
        {sentence: ["Turn", "to", "the", "next", "page."]},
        {sentence: ["The", "tall", "giraffe", "eats", "green", "leaves."]},
        {sentence: ["Perform", "the", "song", "on", "the", "stage."]},
        {sentence: ["Look", "at", "that", "huge", "blue", "whale!"]},
        {sentence: ["Add", "fresh", "ginger", "to", "the", "tea."]},
        {sentence: ["Wash", "your", "hands", "to", "stop", "germs."]},
        {sentence: ["An", "angel", "sat", "on", "the", "tree."]},
        {sentence: ["He", "earned", "a", "gold", "star", "badge."]},
        {sentence: ["Do", "not", "stand", "near", "the", "edge."]},
        {sentence: ["Cross", "the", "river", "on", "the", "bridge."]},
        {sentence: ["Chocolate", "fudge", "is", "very", "sweet."]},
        {sentence: ["The", "green", "hedge", "is", "trimmed", "neatly."]},
        {sentence: ["The", "judge", "picked", "the", "winning", "picture."]},
        {sentence: ["We", "stayed", "in", "a", "warm", "log", "lodge."]},
        {sentence: ["We", "stand", "and", "say", "the", "pledge."]},
        {sentence: ["Dodge", "the", "flying", "foam", "ball."]},
        {sentence: ["Running", "gives", "you", "good", "energy."]},
        {sentence: ["The", "train", "engine", "is", "very", "loud."]},
        {sentence: ["We", "run", "around", "in", "the", "gym."]},
        {sentence: ["Read", "the", "old", "legend", "of", "heroes."]},
        {sentence: ["Write", "words", "inside", "the", "margin."]},
        {sentence: ["A", "grey", "pigeon", "flew", "by."]},
        {sentence: ["A", "carrot", "is", "a", "healthy", "vegetable."]},
        {sentence: ["Be", "gentle", "with", "the", "little", "puppy."]},
        {sentence: ["The", "brave", "general", "led", "the", "way."]},
        {sentence: ["Solar", "panels", "generate", "clean", "power."]}
    ],
    spellingFill: Array.from({length: 40}, (_, i) => ({
        q: `Spelling Fill-in #${i+1}: Choose the missing letter for "C_t" (Animal)`,
        opts: ["a", "o", "u", "i"],
        ans: 0
    })),
    spellingListen: Array.from({length: 40}, (_, i) => ({
        q: `Listen & Match #${i+1}: Select the correct spelling for a pet dog:`,
        opts: ["dog", "dug", "dag", "doge"],
        ans: 0
    })),
    spellingSentence: Array.from({length: 40}, (_, i) => ({
        sentence: ["We", "can", "spell", "word", "number", `${i+1}`, "correctly."]
    })),
    punctQuestion: Array.from({length: 40}, (_, i) => ({
        q: `Question Mark #${i+1}: Which mark goes at the end of: "Where is the dog"`,
        opts: ["?", ".", "!", ","],
        ans: 0
    })),
    punctComma: Array.from({length: 40}, (_, i) => ({
        q: `Comma Practice #${i+1}: Where does the list comma belong in: "apples bananas and pears"`,
        opts: ["apples, bananas, and", "apples bananas,", "none"],
        ans: 0
    })),
    punctPeriod: Array.from({length: 40}, (_, i) => ({
        q: `Full Stop Practice #${i+1}: Which mark ends a clear statement: "The cat slept"`,
        opts: [".", "?", "!", ","],
        ans: 0
    })),
    punctExclamation: Array.from({length: 40}, (_, i) => ({
        q: `Exclamation Practice #${i+1}: Which mark shows excitement: "Look at that big balloon"`,
        opts: ["!", "?", ".", ","],
        ans: 0
    })
};
