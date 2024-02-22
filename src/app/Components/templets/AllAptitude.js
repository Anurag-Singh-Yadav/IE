export const data = [
  {
    title: "Problem on Trains",
    questions: [
      {
        description:
          "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: ["120 metres", "180 metres", "324 metres", "150 metres"],
        answer: "150 metres",
        explanation:
          "Speed = (60 * 5) / 18 m/sec = 50 m/sec. Length of the train = (50 * 9) / 3 m = 150 m.",
      },
      {
        description:
          "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
        answer: "50 km/hr",
        explanation:
          "Speed of the train relative to man = 125 / 10 = 25 m/sec. 25 m/sec = (25 * 18) / 5 km/hr = 45 km/hr. Let the speed of the train be x km/hr. Then, relative speed = (x - 5) km/hr. x - 5 = 45 km/hr => x = 50 km/hr.",
      },
      {
        description:
          "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        options: ["200 m", "225 m", "245 m", "250 m"],
        answer: "245 m",
        explanation:
          "Speed = (45 * 5) / 18 m/sec = 25 m/sec. Time = 30 sec. Let the length of bridge be x metres. Then, 130 + x = 25 * 30 / 2 => 2(130 + x) = 750 => x = 245 m.",
      },
      {
        description:
          "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
        options: ["1 : 3", "3 : 2", "3 : 4", "None of these"],
        answer: "3 : 4",
        explanation:
          "Let the speeds of the two trains be x m/sec and y m/sec respectively. Then, length of the first train = 27x metres, and length of the second train = 17y metres. (27x + 17y) / (x + y) = 23 / 2 => 27x + 17y = 23x + 23y => 4x = 6y => x = 3/2 * y.",
      },
      {
        description:
          "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
        options: ["120 m", "240 m", "300 m", "None of these"],
        answer: "240 m",
        explanation:
          "Speed = (54 * 5) / 18 m/sec = 15 m/sec. Length of the train = 15 * 20 m = 300 m. Let the length of the platform be x metres. Then, x + 300 = 15 * 36 => x = 540 - 300 = 240 m.",
      },
      {
        description:
          "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
        options: ["65 sec", "89 sec", "100 sec", "150 sec"],
        answer: "89 sec",
        explanation:
          "Speed = 240 / 24 = 10 m/sec. Required time = (240 + 650) / 10 = 890 / 10 = 89 seconds.",
      },
      {
        description:
          "Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:",
        options: ["50 m", "72 m", "80 m", "82 m"],
        answer: "50 m",
        explanation:
          "Relative speed = (46 - 36) km/hr = (10 * 5) / 18 m/s = 25 / 9 m/s. Distance covered = 2x, where x is the length of each train. 2x = (25 / 9) * 36 => x = 50.",
      },
      {
        description:
          "A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?",
        options: ["40 sec", "42 sec", "45 sec", "48 sec"],
        answer: "40 sec",
        explanation:
          "Speed = 45 * (5 / 18) = 25 / 2 m/s. Total distance to be covered = 360 + 140 = 500 m. Required time = 500 / (25 / 2) = 40 seconds.",
      },
      {
        description:
          "Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:",
        options: ["36", "45", "48", "49"],
        answer: "48",
        explanation:
          "Relative speed = (60 + 90) * (5 / 18) = 125 / 3 m/s. Distance covered = 1.10 + 0.9 = 2 km = 2000 m. Required time = 2000 / (125 / 3) = 48 seconds.",
      },
      {
        description:
          "A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?",
        options: ["3.6 sec", "18 sec", "36 sec", "72 sec"],
        answer: "36 sec",
        explanation:
          "Speed of train relative to jogger = (45 - 9) * (5 / 18) = 10 m/s. Distance to be covered = 240 + 120 = 360 m. Time taken = 360 / 10 = 36 seconds.",
      },
    ],
  },
  {
    title: "Height and Distance",
    questions: [
      {
        description:
          "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
        options: ["173 m", "200 m", "273 m", "300 m"],
        answer: "273 m",
        explanation:
          "Let AB be the lighthouse and C and D be the positions of the ships. Then, AB = 100 m, ACB = 30° and ADB = 45°. AB = tan 30° = 1. AC = AB x √3 = 100√3 m. AB = tan 45° = 1. AD = AB = 100 m. CD = AC + AD = 100√3 + 100 m = 100(√3 + 1) m = (100 x 2.73) m = 273 m.",
      },
      {
        description:
          "A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?",
        options: [
          "43 units",
          "8 units",
          "12 units",
          "Data inadequate",
          "None of these",
        ],
        answer: "Data inadequate",
        explanation:
          "One of AB, AD and CD must have given. So, the data is inadequate.",
      },
      {
        description:
          "The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
        options: ["2.3 m", "4.6 m", "7.8 m", "9.2 m"],
        answer: "9.2 m",
        explanation:
          "Let AB be the wall and BC be the ladder. Then, ACB = 60° and AC = 4.6 m. AC = cos 60° = 1 / 2. BC = 2 x AC = (2 x 4.6) m = 9.2 m.",
      },
      {
        description:
          "An observer 1.6 m tall is 20√3 away from a tower. The angle of elevation from his eye to the top of the tower is 30°. The height of the tower is:",
        options: ["21.6 m", "23.2 m", "24.72 m", "None of these"],
        answer: "24.72 m",
        explanation:
          "Let AB be the observer and CD be the tower. Draw BE perpendicular to CD. Then, CE = AB = 1.6 m, BE = AC = 20√3 m. DE = tan 30° = 1 / √3. DE = 20√3 / √3 = 20 m. CD = CE + DE = (1.6 + 20) m = 21.6 m.",
      },
      {
        description:
          "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:",
        options: ["149 m", "156 m", "173 m", "200 m"],
        answer: "173 m",
        explanation:
          "Let AB be the tower. Then, APB = 30° and AB = 100 m. AB = tan 30° = 1 / √3. AP = AB x √3 = 100√3 m = (100 x 1.73) m = 173 m.",
      },
    ],
  },
  {
    title: "Problems on Permutations and Combinations",
    questions: [
      {
        description:
          "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
        options: ["564", "645", "735", "756"],
        answer: "756",
        explanation:
          "We may have (3 men and 2 women) or (4 men and 1 woman) or (5 men only). Required number of ways = (7C3 x 6C2) + (7C4 x 6C1) + (7C5) = 7 x 6 x 5 x 6 x 5 + (7C3 x 6C1) + (7C2) = (525 + 210 + 21) = 756.",
      },
      {
        description:
          "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?",
        options: ["360", "480", "720", "5040"],
        answer: "720",
        explanation:
          "The word 'LEADING' has 7 different letters. When the vowels EAI are always together, they can be supposed to form one letter. Then, we have to arrange the letters LNDG (EAI). Now, 5 (4 + 1 = 5) letters can be arranged in 5! = 120 ways. The vowels (EAI) can be arranged among themselves in 3! = 6 ways. Required number of ways = (120 x 6) = 720.",
      },
      {
        description:
          "In how many different ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?",
        options: ["810", "1440", "2880", "50400", "5760"],
        answer: "50400",
        explanation:
          "In the word 'CORPORATION', we treat the vowels OOAIO as one letter. Thus, we have CRPRTN (OOAIO). This has 7 (6 + 1) letters of which R occurs 2 times and the rest are different. Number of ways arranging these letters = 7! / 2! = 2520. Now, 5 vowels in which O occurs 3 times and the rest are different, can be arranged in 5! / 3! = 20 ways. Required number of ways = (2520 x 20) = 50400.",
      },
    ],
  },
  {
    title: "Statement and Conclusion",
    questions: [
      {
        statement:
          "In a one day cricket match, the total runs made by a team were 200. Out of these 160 runs were made by spinners.",
        conclusions: [
          "80% of the team consists of spinners.",
          "The opening batsmen were spinners.",
        ],
        correct: "Neither I nor II follows",
      },
      {
        statement: "The old order changed yielding place to new.",
        conclusions: [
          "Change is the law of nature.",
          "Discard old ideas because they are old.",
        ],
        correct: "Only conclusion I follows",
      },
      {
        statement:
          "Government has spoiled many top ranking financial institutions by appointing bureaucrats as Directors of these institutions.",
        conclusions: [
          "Government should appoint Directors of the financial institutes taking into consideration the expertise of the person in the area of finance.",
          "The Director of the financial institute should have expertise commensurate with the financial work carried out by the institute.",
        ],
        correct: "Both I and II follow",
      },
      {
        statement:
          "Population increase coupled with depleting resources is going to be the scenario of many developing countries in days to come.",
        conclusions: [
          "The population of developing countries will not continue to increase in future.",
          "It will be very difficult for the governments of developing countries to provide its people decent quality of life.",
        ],
        correct: "Only conclusion II follows",
      },
      {
        statement:
          "Prime age school-going children in urban India have now become avid as well as more regular viewers of television, even in households without a TV. As a result there has been an alarming decline in the extent of readership of newspapers.",
        conclusions: [
          "Method of increasing the readership of newspapers should be devised.",
          "A team of experts should be sent to other countries to study the impact of TV. on the readership of newspapers.",
        ],
        correct: "Neither I nor II follows",
      },
    ],
  },
  {
    title: "Logical Questions",
    questions: [
      {
        statement:
          "Tanya is older than Eric. Cliff is older than Tanya. Eric is older than Cliff.",
        options: ["true", "false", "uncertain"],
        correct: "false",
        explanation:
          "Because the first two statements are true, Eric is the youngest of the three, so the third statement must be false.",
      },
      {
        statement:
          "Blueberries cost more than strawberries. Blueberries cost less than raspberries. Raspberries cost more than strawberries and blueberries.",
        options: ["true", "false", "uncertain"],
        correct: "true",
        explanation:
          "Because the first two statements are true, raspberries are the most expensive of the three.",
      },
      {
        statement:
          "All the trees in the park are flowering trees. Some of the trees in the park are dogwoods. All dogwoods in the park are flowering trees.",
        options: ["true", "false", "uncertain"],
        correct: "true",
        explanation:
          "All of the trees in the park are flowering trees, So all dogwoods in the park are flowering trees.",
      },
      {
        statement:
          "Mara runs faster than Gail. Lily runs faster than Mara. Gail runs faster than Lily.",
        options: ["true", "false", "uncertain"],
        correct: "false",
        explanation:
          "We know from the first two statements that Lily runs fastest. Therefore, the third statement must be false.",
      },
      {
        statement:
          "Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons. Apartments in the Livingston Gate cost more than apartments in the The Gaslight Commons. Of the three apartment buildings, the Livingston Gate costs the most.",
        options: ["true", "false", "uncertain"],
        correct: "true",
        explanation:
          "Since the Gaslight Commons costs more than the Riverdale Manor and the Livingston Gate costs more than the Gaslight Commons, it is true that the Livingston Gate costs the most.",
      },
    ],
  },
  {
    title: "Analyzing Arguments",
    questions: [
      {
        statement:
          "One New York publisher has estimated that 50,000 to 60,000 people in the United States want an anthology that includes the complete works of William Shakespeare. And what accounts for this renewed interest in Shakespeare? As scholars point out, his psychological insights into both male and female characters are amazing even today.",
        options: [
          "Shakespeare's characters are more interesting than fictional characters today.",
          "people even today are interested in Shakespeare's work because of the characters.",
          "academic scholars are putting together an anthology of Shakespeare's work.",
          "New Yorkers have a renewed interested in the work of Shakespeare.",
          "Shakespeare was a psychiatrist as well as a playwright.",
        ],
        correct:
          "people even today are interested in Shakespeare's work because of the characters.",
        explanation:
          "The last sentence in the paragraph clearly gives support for the idea that the interest in Shakespeare is due to the development of his characters. Choice a is incorrect because the writer never makes this type of comparison. Choice c is wrong because even though scholars are mentioned in the paragraph, there is no indication that the scholars are compiling the anthology. Choice d is wrong because there is no support to show that most New Yorkers are interested in this work. There is no support for choice e either.",
      },
      {
        statement:
          "One of the warmest winters on record has put consumers in the mood to spend money. Spending is likely to be the strongest in thirteen years. During the month of February, sales of existing single-family homes hit an annual record rate of 4.75 million.",
        options: [
          "consumer spending will be higher thirteen years from now than it is today.",
          "more people buy houses in the month of February than in any other month.",
          "during the winter months, the prices of single-family homes are the lowest.",
          "there were about 4 million homes for sale during the month of February.",
          "warm winter weather is likely to affect the rate of home sales.",
        ],
        correct:
          "warm winter weather is likely to affect the rate of home sales.",
        explanation:
          "This is clearly the best answer because the paragraph directly states that warm weather affects consumers inclination to spend. It furthers states that the sales of single-family homes was at an all-time high. There is no support for choice a or c. Choice b is wrong because even though there were high sales for a particular February, this does not mean that sales are not higher in other months. Choice d presents a misleading figure of 4 million. The paragraph states that the record of 4.75 million was at an annual, not a monthly, rate.",
      },
      {
        statement:
          "Generation Xers are those people born roughly between 1965 and 1981. As employees, Generation Xers tend to be more challenged when they can carry out tasks independently. This makes Generation Xers the most entrepreneurial generation in history.",
        options: [
          "work harder than people from other generations.",
          "have a tendency to be self-directed workers",
          "have an interest in making history",
          "tend to work in jobs that require risk-taking behavior.",
          "like to challenge their bosses work attitudes.",
        ],
        correct: "have a tendency to be self-directed workers",
        explanation:
          "The support for choice b is given in the second sentence of the paragraph. Generation Xers like to work independently, which means they are self-directed. No support is given for either choice a or choice c. Choice d is not related to the paragraph. Although the paragraph mentions that Generation Xers like to be challenged, it does not say they like to challenge their bosses attitudes; therefore, choice e can be ruled out.",
      },
      {
        statement:
          "If you're a fitness walker, there is no need for a commute to a health club. Your neighborhood can be your health club. You don't need a lot of fancy equipment to get a good workout either. All you need is a well-designed pair of athletic shoes.",
        options: [
          "fitness walking is a better form of exercise than weight lifting.",
          "a membership in a health club is a poor investment.",
          "walking outdoors provides a better workout than walking indoors.",
          "fitness walking is a convenient and valuable form of exercise.",
          "poorly designed athletic shoes can cause major foot injuries.",
        ],
        correct:
          "fitness walking is a convenient and valuable form of exercise.",
        explanation:
          "By stating that fitness walking does not require a commute to a health club, the author stresses the convenience of this form of exercise. The paragraph also states that fitness walking will result in a good workout. Choice a is incorrect because no comparison to weight lifting is made. Choice b may seem like a logical answer, but the paragraph only refers to people who are fitness walkers, so for others, a health club might be a good investment. Choice c is not in the passage. Although choice e seems logical, the paragraph does not indicate that the wrong shoes will produce major injuries.",
      },
      {
        statement:
          "In the past, consumers would rarely walk into an ice cream store and order low-fat ice cream. But that isn't the case today. An increasing health consciousness combined with a much bigger selection of tasty low-fat foods in all categories has made low-fat ice cream a very profitable item for ice cream store owners.",
        options: [
          "low-fat ice cream produces more revenue than other low-fat foods.",
          "ice cream store owners would be better off carrying only low-fat ice cream.",
          "ice cream store owners no longer think that low-fat ice cream is an unpopular item.",
          "low-fat ice cream is more popular than other kinds of ice cream.",
          "consumers are fickle and it is impossible to please them",
        ],
        correct:
          "ice cream store owners no longer think that low-fat ice cream is an unpopular item.",
        explanation:
          "This choice is supported as the best answer because the paragraph indicates that low-fat ice cream was once an unpopular item, but now, because consumers are more health conscious and because there is a wider array of tasty low-fat foods, low-fat ice cream is a profitable item for ice cream store owners. There is no indication that choices a, b, d,or e are true based on the information given.",
      },
    ],
  },
  {
    title: "Number Series",
    questions: [
      {
        statement:
          "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
        correct: "(1/8)",
        explanation:
          "This is a simple division series; each number is one-half of the previous number. In other terms to say, the number is divided by 2 successively to get the next result.",
      },
      {
        statement:
          "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options: ["7", "10", "12", "13"],
        correct: "10",
        explanation:
          "This is a simple alternating addition and subtraction series. In the first pattern, 3 is added; in the second, 2 is subtracted.",
      },
      {
        statement:
          "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
        options: ["20", "22", "23", "26"],
        correct: "22",
        explanation:
          "This is an alternating number subtraction series. First, 2 is subtracted, then 4, then 2, and so on.",
      },
      {
        statement:
          "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
        options: ["22", "24", "25", "26"],
        correct: "24",
        explanation:
          "In this simple alternating subtraction and addition series; 1 is subtracted, then 2 is added, and so on.",
      },
      {
        statement:
          "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
        options: ["12", "14", "27", "53"],
        correct: "27",
        explanation:
          "In this series, each number is repeated, then 13 is subtracted to arrive at the next number.",
      },
    ],
  },
];
