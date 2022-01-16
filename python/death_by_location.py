
import csv

with open('../data/game-of-thrones-deaths-data.csv', 'r') as f:
    reader = csv.DictReader(f)
    death_data = list(reader) 

death_locations_dict = {}

for death in death_data:
    if death['location'] not in death_locations_dict:
        death_locations_dict[death['location']] = 1
    else:
        death_locations_dict[death['location']] += 1
        
death_locations_dict.pop('Unknown')

with open('../data/death_locations.csv', 'w') as f:
    writer = csv.writer(f)

    writer.writerow(['location','value'])

    for d_type in list(death_locations_dict.keys()):
        
        writer.writerow([d_type,death_locations_dict[d_type]])