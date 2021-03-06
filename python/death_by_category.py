# This script helps strip out information
# from a death database csv to determine how deaths occurred by category
# it writes a dictionary and then populates another csv  

import csv

with open('../data/game-of-thrones-deaths-data.csv', 'r') as f:
    reader = csv.DictReader(f)
    death_data = list(reader) 

death_types_dict = {}

for death in death_data:
    if death['method_cat'] not in death_types_dict:
        death_types_dict[death['method_cat']] = 1
    else:
        death_types_dict[death['method_cat']] += 1
        
death_types_dict.pop('Unknown')

with open('../data/death_categories.csv', 'w') as f:
    writer = csv.writer(f)

    writer.writerow(['death_type','value'])

    for d_type in list(death_types_dict.keys()):
        
        writer.writerow([d_type,death_types_dict[d_type]])

    
    
    
    