# Saved Script: LIVE CHAT simulator backend (demo)

import random
import time

watching = 250
like = 180
visit = 600

boost = 1

intervals = [100,1,501,245,237,915,135,5]

users = ["VN", "US", "JP", "KR"]

def rand_interval():
    return random.choice(intervals) / 1000

while True:
    watching += random.randint(0,5)
    like += random.randint(0,3)
    visit += random.randint(0,7)

    print(f"👤:{watching} 👍:{like} 👁️:{visit}")

    time.sleep(rand_interval())
