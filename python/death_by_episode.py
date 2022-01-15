
import csv

#open database
with open('../data/game-of-thrones-deaths-data.csv', 'r') as f:
    reader = csv.DictReader(f)
    death_data = list(reader) 

#create placeholder dict for each season
death_counts = {}
for i in range(8):
    death_counts[str(i+1)] = {}

#look at each death and add it to our dict with the appropriate season and episode
for death in death_data:
    season = death['season']
    epi = death['episode']
        
    if epi in death_counts[str(season)]:
        death_counts[str(season)][epi] += 1
    else:
        death_counts['season' + str(season)][epi] = 1
    
#verify we got them all
num = 0
for season in death_counts:
    for episode in death_counts[season]:
        num += death_counts[season][episode]
if num == len(death_data): print("data checks out")

#write it to a csv file
with open('../data/death_by_episode.csv', 'w') as f:
    writer = csv.writer(f)

    writer.writerow(['season','episode','value'])

    for season in death_counts:
        for episode in death_counts[season]:
            writer.writerow([season, episode, death_counts[season][episode]])

    
    
    
    
    
    
    
    
    
    
    
    
    
    