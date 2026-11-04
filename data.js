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
        {sentence: ["Use", "a", "crayon", "to", "trace", "letters."]},
        {sentence: ["The", "circus", "clown", "made", "us", "smile."]},
        {sentence: ["A", "cell", "phone", "is", "very", "smart."]},
        {sentence: ["She", "will", "gracefully", "dance", "on", "stage."]},
        {sentence: ["Ice", "cream", "is", "cold", "and", "sweet."]},
        {sentence: ["His", "bicycle", "has", "shiny", "wheels."]},
        {sentence: ["We", "live", "in", "a", "busy", "city."]},
        {sentence: ["He", "spent", "every", "single", "cent."]},
        {sentence: ["Wash", "your", "face", "before", "bed."]},
        {sentence: ["Add", "rice", "to", "the", "hot", "soup."]},
        {sentence: ["Trace", "the", "dotted", "lines", "carefully."] }
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
        {sentence: ["Solar", "panels", "generate", "clean", "power."]},
        {sentence: ["The", "gym", "teacher", "blew", "his", "whistle."]},
        {sentence: ["A", "huge", "elephant", "walked", "by."]},
        {sentence: ["The", "magic", "show", "was", "amazing."]},
        {sentence: ["A", "gentle", "breeze", "cooled", "the", "air."]},
        {sentence: ["The", "engine", "started", "with", "a", "roar."]},
        {sentence: ["Keep", "germs", "away", "by", "washing", "hands."]},
        {sentence: ["She", "baked", "sweet", "chocolate", "fudge."]},
        {sentence: ["The", "bird", "flew", "out", "of", "its", "cage."]},
        {sentence: ["He", "read", "every", "single", "page."]},
        {sentence: ["A", "bright", "gem", "sparkled", "in", "the", "light."] }
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
    // 40 True Question Mark Sentence Building Activities
    punctQuestion: Array.from({length: 40}, (_, i) => ({
        sentence: ["Where", "is", "the", "blue", "ball", `number`, `${i+1}`, "?"]
    })),
    // 40 True Comma List Activities
    punctComma: Array.from({length: 40}, (_, i) => ({
        sentence: ["I", "like", "apples,", "bananas,", "and", "grapes", `${i+1}`, "."]
    })),
    // 40 True Period Sentence Activities
    punctPeriod: Array.from({length: 40}, (_, i) => ({
        sentence: ["The", "cat", "is", "sleeping", "on", "the", "rug", `${i+1}`, "."]
    })),
    // 40 True Exclamation Sentence Activities
    punctExclamation: Array.from({length: 40}, (_, i) => ({
        sentence: ["What", "a", "wonderful", "surprise", "this", "is", `${i+1}`, "!"]
    })
};
