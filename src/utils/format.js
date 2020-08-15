const jobArea = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "QA and Testing",
    "Mobile (Android)",
    "Mobile (iOS)",
    "Mobile (Hybrid)",
    "Design",
    "UX",
    "Product Owner",
    "Business",
    "Others"
]

const jobPosition = [
    "Intern",
    "Junior",
    "Middle",
    "Senior",
    "Trainee",
    "Lead",
    "CTO",
    "Director",
    "Others"
]

const jobRegion = [
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Asia",
    "Africa",
    "N/A"
]

const jobMode = [
    "Office-only",
    "Remote-only",
    "Hybrid (Office and Remote)"
]

// functions
function getJobArea(areaNumber) {
    return jobArea[areaNumber]
}

function getJobPosition(positionNumber) {
    return jobPosition[positionNumber]
}

function getRegion(regionNumber) {
    return jobRegion[regionNumber]
}

function getJobMode(modeNumber) {
    return jobMode[modeNumber]
}

module.exports = {
    getJobArea,
    getJobPosition,
    getRegion,
    getJobMode
}