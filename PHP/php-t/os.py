import os

# if(not os.path.exists("PHP_T")):
    
# os.mkdir("DAYs")
# for i in range(38,80):
#     os.rmdir(f"PHP-T/DAY{i}")

# to remove files
for i in range(38, 81):
    file_path = f"DaY{i}.php"  # Change extension as needed
    if os.path.isfile(file_path):
        os.remove(file_path)
        print(f"Removed: {file_path}")
    else:
        print(f"File not found: {file_path}")