const getValue = (id) => document.getElementById(id).value;

function calculateLighting() {
    const setup = getValue("setup-type");
    const algae = getValue("algae-status");
    const res = document.getElementById("result");

    let baseHours = 8;
    let advice = "";

    if (setup === "fish-only") {
        baseHours = 6;
        advice = "Minimal lighting is best for viewing without encouraging algae.";
    } else if (setup === "low-tech") {
        baseHours = 8;
        advice = "A balanced 8-hour window supports slow-growing plants.";
    } else if (setup === "high-tech") {
        baseHours = 9;
        advice = "CO2 injection allows for longer, high-intensity photoperiods.";
    }

    let finalHours = baseHours;
    if (algae === "minor") {
        finalHours -= 1;
        advice += " Reduce slightly to get algae under control.";
    } else if (algae === "major") {
        finalHours -= 2;
        advice = "Immediate reduction needed to starve the bloom. Consider a 'blackout'.";
    }

    res.innerHTML = `
        <strong>Recommended Photoperiod: ${finalHours} Hours</strong><br>
        <span style="font-size: 0.9rem; color: #334e68;">
            (${advice})
        </span>
    `;
}

function clearAll() {
    document.getElementById("setup-type").value = "fish-only";
    document.getElementById("algae-status").value = "none";
    document.getElementById("result").innerText = "";
}