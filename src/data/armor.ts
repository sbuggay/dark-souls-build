export interface IArmor {
    name: string;
    def: {
        regular: number;
        strike: number;
        slash: number;
        thrust: number;
        magic: number;
        fire: number;
        lightning: number;
        bleed: number;
        poison: number;
        curse: number;
    },
    poise: number;
    weight: number;
}

export const armorData: IArmor[] = [
    {
      "name": "Big Hat's Set",
      "def": {
        "regular": 79,
        "strike": 84.7,
        "slash": 83,
        "thrust": 77.6,
        "magic": 103,
        "fire": 52,
        "lightning": 72,
        "bleed": 90,
        "poison": 90,
        "curse": 0
      },
      "poise": 0,
      "weight": 10.2
    },
    {
      "name": "Black Set",
      "def": {
        "regular": 62,
        "strike": 67.6,
        "slash": 62,
        "thrust": 62,
        "magic": 77,
        "fire": 63,
        "lightning": 48,
        "bleed": 56,
        "poison": 56,
        "curse": 47
      },
      "poise": 0,
      "weight": 11
    },
    {
      "name": "Black Sorcerer Set",
      "def": {
        "regular": 34,
        "strike": 34.9,
        "slash": 37.1,
        "thrust": 34,
        "magic": 73,
        "fire": 53,
        "lightning": 53,
        "bleed": 79,
        "poison": 79,
        "curse": 20
      },
      "poise": 0,
      "weight": 4.5
    },
    {
      "name": "Brigand Set",
      "def": {
        "regular": 60,
        "strike": 66,
        "slash": 60,
        "thrust": 54,
        "magic": 52,
        "fire": 34,
        "lightning": 43,
        "bleed": 52,
        "poison": 52,
        "curse": 0
      },
      "poise": 0,
      "weight": 7.9
    },
    {
      "name": "Chain Set",
      "def": {
        "regular": 72,
        "strike": 72,
        "slash": 86.4,
        "thrust": 69.8,
        "magic": 55,
        "fire": 44,
        "lightning": 19,
        "bleed": 57,
        "poison": 34,
        "curse": 0
      },
      "poise": 26,
      "weight": 17.2
    },
    {
      "name": "Chester's Set",
      "def": {
        "regular": 68,
        "strike": 91.8,
        "slash": 68,
        "thrust": 68,
        "magic": 74,
        "fire": 52,
        "lightning": 70,
        "bleed": 109,
        "poison": 80,
        "curse": 0
      },
      "poise": 0,
      "weight": 11.2
    },
    {
      "name": "Crimson Set",
      "def": {
        "regular": 80,
        "strike": 88,
        "slash": 80,
        "thrust": 80,
        "magic": 81,
        "fire": 47,
        "lightning": 59,
        "bleed": 52,
        "poison": 52,
        "curse": 52
      },
      "poise": 0,
      "weight": 9.7
    },
    {
      "name": "Dingy Set",
      "def": {
        "regular": 57,
        "strike": 72.4,
        "slash": 57,
        "thrust": 57,
        "magic": 81,
        "fire": 48,
        "lightning": 62,
        "bleed": 78,
        "poison": 65,
        "curse": 87
      },
      "poise": 0,
      "weight": 7.5
    },
    {
      "name": "Gold-Hemmed Black Set",
      "def": {
        "regular": 77,
        "strike": 82.4,
        "slash": 77,
        "thrust": 77,
        "magic": 93,
        "fire": 153,
        "lightning": 54,
        "bleed": 102,
        "poison": 240,
        "curse": 0
      },
      "poise": 0,
      "weight": 9.1
    },
    {
      "name": "Great Lord Set",
      "def": {
        "regular": 78,
        "strike": 84.3,
        "slash": 88.8,
        "thrust": 71.7,
        "magic": 78,
        "fire": 100,
        "lightning": 100,
        "bleed": 73,
        "poison": 37,
        "curse": 96
      },
      "poise": 0,
      "weight": 14.6
    },
    {
      "name": "Hollow Soldier Set",
      "def": {
        "regular": 49,
        "strike": 48,
        "slash": 54.4,
        "thrust": 43.1,
        "magic": 30,
        "fire": 31,
        "lightning": 20,
        "bleed": 35,
        "poison": 24,
        "curse": 0
      },
      "poise": 24,
      "weight": 12.3
    },
    {
      "name": "Hollow Thief's Set",
      "def": {
        "regular": 41,
        "strike": 44.7,
        "slash": 41,
        "thrust": 42.6,
        "magic": 39,
        "fire": 26,
        "lightning": 35,
        "bleed": 30,
        "poison": 57,
        "curse": 0
      },
      "poise": 0,
      "weight": 5.6
    },
    {
      "name": "Hollow Warrior Set",
      "def": {
        "regular": 47,
        "strike": 45.6,
        "slash": 48.4,
        "thrust": 44.6,
        "magic": 30,
        "fire": 23,
        "lightning": 31,
        "bleed": 24,
        "poison": 24,
        "curse": 0
      },
      "poise": 16,
      "weight": 9.6
    },
    {
      "name": "Lord's Blade Set",
      "def": {
        "regular": 89,
        "strike": 89,
        "slash": 93.3,
        "thrust": 98.1,
        "magic": 67,
        "fire": 68,
        "lightning": 53,
        "bleed": 73,
        "poison": 128,
        "curse": 62
      },
      "poise": 20,
      "weight": 16.7
    },
    {
      "name": "Maiden Set",
      "def": {
        "regular": 51,
        "strike": 59.7,
        "slash": 51,
        "thrust": 51,
        "magic": 50,
        "fire": 42,
        "lightning": 54,
        "bleed": 75,
        "poison": 57,
        "curse": 26
      },
      "poise": 0,
      "weight": 6.5
    },
    {
      "name": "Moonlight Set",
      "def": {
        "regular": 47,
        "strike": 47,
        "slash": 47,
        "thrust": 47,
        "magic": 66,
        "fire": 36,
        "lightning": 36,
        "bleed": 50,
        "poison": 50,
        "curse": 66
      },
      "poise": 0,
      "weight": 8.4
    },
    {
      "name": "Painting Guardian Set",
      "def": {
        "regular": 40,
        "strike": 48,
        "slash": 40,
        "thrust": 40,
        "magic": 117,
        "fire": 79,
        "lightning": 62,
        "bleed": 83,
        "poison": 205,
        "curse": 42
      },
      "poise": 0,
      "weight": 7.1
    },
    {
      "name": "Shadow Set",
      "def": {
        "regular": 58,
        "strike": 64,
        "slash": 58,
        "thrust": 58,
        "magic": 31,
        "fire": 40,
        "lightning": 43,
        "bleed": 100,
        "poison": 121,
        "curse": 0
      },
      "poise": 0,
      "weight": 6
    },
    {
      "name": "Witch Set",
      "def": {
        "regular": 73,
        "strike": 81,
        "slash": 73,
        "thrust": 73,
        "magic": 100,
        "fire": 47,
        "lightning": 61,
        "bleed": 85,
        "poison": 90,
        "curse": 37
      },
      "poise": 0,
      "weight": 9.3
    },
    {
      "name": "Xanthous Set",
      "def": {
        "regular": 100,
        "strike": 119.5,
        "slash": 100,
        "thrust": 89.9,
        "magic": 113,
        "fire": 21,
        "lightning": 68,
        "bleed": 64,
        "poison": 88,
        "curse": 35
      },
      "poise": 0,
      "weight": 16.2
    },
    {
      "name": "Antiquated Set",
      "def": {
        "regular": 62.3,
        "strike": 62.3,
        "slash": 62.3,
        "thrust": 62.3,
        "magic": 144.7,
        "fire": 42.2,
        "lightning": 84.9,
        "bleed": 58.4,
        "poison": 58.4,
        "curse": 139.3
      },
      "poise": 0,
      "weight": 5
    },
    {
      "name": "Big Hat's Set",
      "def": {
        "regular": 143.2,
        "strike": 155.3,
        "slash": 150.4,
        "thrust": 141,
        "magic": 187.5,
        "fire": 94.5,
        "lightning": 129,
        "bleed": 117.9,
        "poison": 117.9,
        "curse": 0
      },
      "poise": 0,
      "weight": 10.2
    },
    {
      "name": "Black Set",
      "def": {
        "regular": 96.1,
        "strike": 104.8,
        "slash": 96.1,
        "thrust": 96.1,
        "magic": 119.3,
        "fire": 97.7,
        "lightning": 74.3,
        "bleed": 71.1,
        "poison": 71.1,
        "curse": 59.6
      },
      "poise": 0,
      "weight": 11
    },
    {
      "name": "Black Sorcerer Set",
      "def": {
        "regular": 82.4,
        "strike": 84.7,
        "slash": 89.7,
        "thrust": 82.4,
        "magic": 176.6,
        "fire": 128.2,
        "lightning": 128.2,
        "bleed": 110.6,
        "poison": 110.6,
        "curse": 14
      },
      "poise": 0,
      "weight": 4.5
    },
    {
      "name": "Brigand Set",
      "def": {
        "regular": 145.3,
        "strike": 159.8,
        "slash": 145.3,
        "thrust": 130.7,
        "magic": 125.5,
        "fire": 82.4,
        "lightning": 104,
        "bleed": 72.8,
        "poison": 72.8,
        "curse": 0
      },
      "poise": 0,
      "weight": 7.9
    },
    {
      "name": "Chain Set",
      "def": {
        "regular": 174.2,
        "strike": 174.2,
        "slash": 209,
        "thrust": 169.1,
        "magic": 133.1,
        "fire": 106.5,
        "lightning": 46,
        "bleed": 79.8,
        "poison": 47.6,
        "curse": 0
      },
      "poise": 26,
      "weight": 17.2
    },
    {
      "name": "Chester's Set",
      "def": {
        "regular": 105.3,
        "strike": 142.3,
        "slash": 105.3,
        "thrust": 105.3,
        "magic": 114.6,
        "fire": 126.8,
        "lightning": 108.5,
        "bleed": 138.5,
        "poison": 101.6,
        "curse": 0
      },
      "poise": 0,
      "weight": 11.2
    },
    {
      "name": "Crimson Set",
      "def": {
        "regular": 123.9,
        "strike": 136.4,
        "slash": 123.9,
        "thrust": 123.9,
        "magic": 125.4,
        "fire": 72.7,
        "lightning": 91.3,
        "bleed": 66.1,
        "poison": 66.1,
        "curse": 66.1
      },
      "poise": 0,
      "weight": 9.7
    },
    {
      "name": "Dingy Set",
      "def": {
        "regular": 123.5,
        "strike": 154.3,
        "slash": 123.5,
        "thrust": 123.5,
        "magic": 196.1,
        "fire": 116.2,
        "lightning": 150,
        "bleed": 121.8,
        "poison": 91,
        "curse": 121.8
      },
      "poise": 0,
      "weight": 7.5
    },
    {
      "name": "Gold-Hemmed Black Set",
      "def": {
        "regular": 77,
        "strike": 82.4,
        "slash": 77,
        "thrust": 77,
        "magic": 93,
        "fire": 153,
        "lightning": 54,
        "bleed": 102,
        "poison": 240,
        "curse": 0
      },
      "poise": 0,
      "weight": 9.1
    },
    {
      "name": "Great Lord Set",
      "def": {
        "regular": 78,
        "strike": 84.3,
        "slash": 88.8,
        "thrust": 71.7,
        "magic": 78,
        "fire": 100,
        "lightning": 100,
        "bleed": 73,
        "poison": 37,
        "curse": 96
      },
      "poise": 0,
      "weight": 14.6
    },
    {
      "name": "Hollow Soldier Set",
      "def": {
        "regular": 118.6,
        "strike": 118.6,
        "slash": 131.6,
        "thrust": 104.4,
        "magic": 72.6,
        "fire": 75,
        "lightning": 48.4,
        "bleed": 49,
        "poison": 33.6,
        "curse": 0
      },
      "poise": 24,
      "weight": 12.3
    },
    {
      "name": "Hollow Thief's Set",
      "def": {
        "regular": 99.2,
        "strike": 108.2,
        "slash": 99.2,
        "thrust": 103.2,
        "magic": 94.4,
        "fire": 63,
        "lightning": 84.7,
        "bleed": 42,
        "poison": 49,
        "curse": 0
      },
      "poise": 0,
      "weight": 5.6
    },
    {
      "name": "Hollow Warrior Set",
      "def": {
        "regular": 113.8,
        "strike": 110.3,
        "slash": 117.1,
        "thrust": 108.1,
        "magic": 72.6,
        "fire": 55.6,
        "lightning": 75,
        "bleed": 33.6,
        "poison": 33.6,
        "curse": 0
      },
      "poise": 16,
      "weight": 9.6
    },
    {
      "name": "Lord's Blade Set",
      "def": {
        "regular": 137.9,
        "strike": 137.9,
        "slash": 144.8,
        "thrust": 151.8,
        "magic": 103.8,
        "fire": 128.7,
        "lightning": 82.1,
        "bleed": 92.7,
        "poison": 162.5,
        "curse": 85.1
      },
      "poise": 20,
      "weight": 16.7
    },
    {
      "name": "Maiden Set",
      "def": {
        "regular": 123.4,
        "strike": 144.3,
        "slash": 123.4,
        "thrust": 123.4,
        "magic": 169.4,
        "fire": 101.7,
        "lightning": 130.6,
        "bleed": 105,
        "poison": 79.8,
        "curse": 36.4
      },
      "poise": 0,
      "weight": 6.5
    },
    {
      "name": "Moonlight Set",
      "def": {
        "regular": 47,
        "strike": 47,
        "slash": 47,
        "thrust": 47,
        "magic": 66,
        "fire": 36,
        "lightning": 36,
        "bleed": 50,
        "poison": 50,
        "curse": 66
      },
      "poise": 0,
      "weight": 8.4
    },
    {
      "name": "Painting Guardian Set",
      "def": {
        "regular": 61.9,
        "strike": 74.4,
        "slash": 61.9,
        "thrust": 61.9,
        "magic": 181.3,
        "fire": 122.3,
        "lightning": 96,
        "bleed": 105.4,
        "poison": 260.4,
        "curse": 53.3
      },
      "poise": 0,
      "weight": 7.1
    },
    {
      "name": "Shadow Set",
      "def": {
        "regular": 89.7,
        "strike": 98.9,
        "slash": 89.7,
        "thrust": 89.7,
        "magic": 48,
        "fire": 61.9,
        "lightning": 66.6,
        "bleed": 127,
        "poison": 153.8,
        "curse": 0
      },
      "poise": 0,
      "weight": 6
    },
    {
      "name": "Witch Set",
      "def": {
        "regular": 113,
        "strike": 118.3,
        "slash": 120.3,
        "thrust": 113,
        "magic": 155,
        "fire": 72.8,
        "lightning": 94.4,
        "bleed": 107.9,
        "poison": 104.3,
        "curse": 47
      },
      "poise": 0,
      "weight": 9.3
    },
    {
      "name": "Xanthous Set",
      "def": {
        "regular": 155,
        "strike": 185.4,
        "slash": 155,
        "thrust": 139.3,
        "magic": 175,
        "fire": 32.4,
        "lightning": 105.3,
        "bleed": 81.2,
        "poison": 111.8,
        "curse": 44.4
      },
      "poise": 0,
      "weight": 15.2
    }
  ]