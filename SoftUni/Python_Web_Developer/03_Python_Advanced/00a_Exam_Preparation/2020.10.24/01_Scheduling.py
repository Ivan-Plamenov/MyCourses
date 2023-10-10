def sjf(jobs, index_of_interest):
    # Pair each job with its original index
    indexed_jobs = [(job, index) for index, job in enumerate(jobs)]

    # Sort the jobs by their cycle time, using their original index as a tiebreaker
    indexed_jobs.sort(key=lambda x: (x[0], x[1]))

    total_cycles = 0
    for job, original_index in indexed_jobs:
        if original_index == index_of_interest:
            total_cycles += job
            break
        total_cycles += job

    return total_cycles


# Get input
jobs = list(map(int, input().split(", ")))
index_of_interest = int(input())

# Calculate the time required for the job of interest
time_required = sjf(jobs, index_of_interest)
print(time_required)
