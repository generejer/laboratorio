
with open("input.txt", "r") as file:
    name = file.readline().strip()
    job_name = file.readline().strip()
    first_adjective = file.readline().strip()
    second_adjective = file.readline().strip()
    first_food = file.readline().strip()
    second_food = file.readline().strip()
    feeling = file.readline().strip()


mad_lib = (
    f"{name} started their first Generation course today. "
    f"They are training as a {job_name}. "
    f"They found their cohort to be very {first_adjective} but their teacher was, at least, {second_adjective}. "
    f"For lunch they have {first_food} and {second_food} while reviewing their notes. "
    f"They feel {feeling} but are determined to complete the course."
)


print(mad_lib)
