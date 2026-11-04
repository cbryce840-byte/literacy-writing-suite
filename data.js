// ====================================================
// LITERACY & WRITING SUITE - MASTER DATA FILE (40 ITEMS/CAT)
// ====================================================

// ----------------------------------------------------
// 1. FILL IN MISSING LETTER (40 Activities)
// ----------------------------------------------------
const missingLetterData = Array.from({ length: 40 }, (_, i) => {
    const list = [
        { word: "C_T", answer: "A", full: "CAT", hint: "Furry pet that meows" },
        { word: "D_G", answer: "O", full: "DOG", hint: "Friendly pet that barks" },
        { word: "S_N", answer: "U", full: "SUN", hint: "Bright light in the sky" },
        { word: "B_LL", answer: "A", full: "BALL", hint: "Round toy to bounce" },
        { word: "F_SH", answer: "I", full: "FISH", hint: "Swims in the water" },
        { word: "B_OK", answer: "O", full: "BOOK", hint: "You read this story" },
        { word: "F_RG", answer: "O", full: "FROG", hint: "Jumps in the pond" },
        { word: "ST_R", answer: "A", full: "STAR", hint: "Shines in the night sky" }
    ];
    return list[i % list.length];
});

// ----------------------------------------------------
// 2. LISTEN & SELECT SPELLING (40 Activities)
// ----------------------------------------------------
const listenSelectData = Array.from({ length: 40 }, (_, i) => {
    const list = [
        { target: "APPLE", options: ["APPLE", "APEL", "APLE"] },
        { target: "HAPPY", options: ["HAPY", "HAPPY", "HAPPI"] },
        { target: "SCHOOL", options: ["SKOOL", "SCHOOL", "SCHUL"] },
        { target: "FRIEND", options: ["FREND", "FRIEND", "FRIND"] },
        { target: "SPRING", options: ["SPRING", "SPING", "SPRIN"] },
        { target: "PLANT", options: ["PLANT", "PLENT", "PLAT"] },
        { target: "BRIGHT", options: ["BRITE", "BRIGHT", "BRIGHTE"] },
        { target: "JUMPING", options: ["JUMPING", "JUMPIN", "JMPING"] }
    ];
    return list[i % list.length];
});

// ----------------------------------------------------
// 3. SENTENCE BUILDING & PHONICS CATEGORIES (40 Activities Each)
// ----------------------------------------------------
const categoryData = {
    // Soft C Sounds
    softC: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["The", "nice", "city", "has", "a", "big", "circus", "."],
            ["I", "see", "ice", "on", "the", "blue", "plate", "."],
            ["Put", "the", "pencil", "in", "your", "desk", "."],
            ["The", "mice", "run", "fast", "in", "the", "space", "."],
            ["Dance", "with", "me", "near", "the", "stage", "."],
            ["The", "price", "of", "the", "juice", "is", "fair", "."],
            ["A", "gentle", "swan", "swims", "by", "the", "fence", "."],
            ["Trace", "the", "circle", "on", "the", "paper", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Soft G Sounds
    softG: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["The", "huge", "giant", "lives", "in", "the", "castle", "."],
            ["A", "gentle", "giraffe", "eats", "green", "leaves", "."],
            ["Do", "not", "cage", "the", "wild", "bird", "."],
            ["The", "magic", "show", "was", "so", "much", "fun", "."],
            ["Gem", "stones", "sparkle", "in", "the", "sun", "."],
            ["The", "engine", "chugs", "down", "the", "track", "."],
            ["An", "orange", "slice", "is", "sweet", "to", "eat", "."],
            ["The", "gym", "class", "runs", "fast", "today", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Blends & Digraphs
    blends: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["The", "clock", "ticks", "on", "the", "wall", "."],
            ["We", "clap", "our", "hands", "with", "joy", "."],
            ["The", "blue", "blocks", "are", "on", "the", "floor", "."],
            ["She", "plays", "with", "a", "clean", "toy", "."],
            ["The", "frog", "swims", "across", "the", "lake", "."],
            ["I", "ship", "the", "big", "gift", "today", "."],
            ["They", "sing", "a", "sweet", "song", "together", "."],
            ["The", "small", "crab", "crawls", "on", "sand", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Sight Words & Vocabulary
    sightWords: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["I", "can", "see", "the", "bright", "yellow", "sun", "."],
            ["Look", "at", "that", "little", "red", "bird", "."],
            ["We", "went", "to", "the", "park", "yesterday", "."],
            ["He", "has", "two", "big", "green", "apples", "."],
            ["She", "likes", "to", "read", "good", "books", "."],
            ["They", "are", "going", "to", "play", "outside", "."],
            ["Where", "did", "you", "find", "that", "toy", "?"],
            ["Please", "help", "me", "wash", "my", "hands", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Compound Sentences
    compound: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["I", "like", "apples", "and", "he", "likes", "bananas", "."],
            ["The", "sun", "came", "out", "so", "we", "went", "outside", "."],
            ["She", "wanted", "to", "play", "but", "it", "rained", "."],
            ["We", "can", "read", "books", "or", "draw", "pictures", "."],
            ["He", "ran", "fast", "and", "won", "the", "race", "."],
            ["The", "dog", "barked", "and", "the", "cat", "ran", "away", "."],
            ["I", "was", "hungry", "so", "I", "ate", "lunch", "."],
            ["It", "was", "cold", "out", "so", "he", "wore", "a", "coat", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Punctuation - Period
    punctPeriod: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["The", "cat", "is", "sleeping", "on", "the", "warm", "rug", "."],
            ["We", "ate", "fresh", "fruit", "for", "a", "snack", "."],
            ["He", "rides", "his", "fast", "bike", "down", "the", "street", "."],
            ["The", "sun", "shines", "bright", "all", "day", "long", "."]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Punctuation - Question Mark
    punctQuestion: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["Where", "is", "my", "favorite", "blue", "ball", "?"],
            ["Can", "we", "go", "to", "the", "park", "today", "?"],
            ["What", "time", "does", "the", "fun", "movie", "start", "?"],
            ["Who", "left", "the", "front", "door", "open", "?"]
        ];
        return { sentence: pool[i % pool.length] };
    }),

    // Punctuation - Exclamation Mark
    punctExclamation: Array.from({ length: 40 }, (_, i) => {
        const pool = [
            ["What", "a", "wonderful", "and", "exciting", "surprise", "!"],
            ["Look", "at", "that", "huge", "fireworks", "rocket", "!"],
            ["We", "won", "the", "big", "championship", "game", "!"],
            ["That", "was", "the", "best", "day", "ever", "!"]
        ];
        return { sentence: pool[i % pool.length] };
    })
};
