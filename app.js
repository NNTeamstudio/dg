window.onload = () => {
    const BOT_ID = "1155294313442459720";
    const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNTUyOTQzMTM0NDI0NTk3MjAiLCJib3QiOnRydWUsImlhdCI6MTcxNzYzODcwOX0.dbq2tmEWG6X6n6mqNPKD3U9Lrddw-NmXZCOnBhnIkvk";

    const fetchBotStats = () => {
        fetch(`https://top.gg/api/bots/${BOT_ID}`, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("vote-month").textContent = data.monthlyPoints || "No disponible";
            document.getElementById("vote-count").textContent = data.points || "No disponible";
        })
        .catch(error => console.error("Error fetching bot stats:", error));
    };

    const fetchStats = () => {
        fetch(`https://top.gg/api/bots/${BOT_ID}/stats`, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("server-count").textContent = data.server_count || "No disponible";
            document.getElementById("user-count").textContent = data.shard_count || "No disponible";
        })
        .catch(error => console.error("Error fetching bot stats:", error));
    };

    fetchBotStats();
    fetchStats();
};