const api_key = ""; // 请填写您的 API 密钥。 // Please fill in your API key. 
const headers = {
    "Content-Type": "application/json",
    "Authorization": " Token " + api_key
};

fetch('https://rwrstats.com/api/players/invasion/toby15/stats-history?page=1&limit=25', {
    headers: headers
}).then(res => res.json()).then(console.table);


/**
 * 异步获取玩家统计数据并在控制台中以表格形式显示。
 * 
 * Fetches player statistics data asynchronously and displays it in a table format in the console.
 * 
 * @async
 * @function getStats
 * @returns {Promise<void>} - 不返回任何内容，仅在控制台中显示数据。
 * @throws {Error} - 如果获取数据失败，将抛出错误。
 */
async function getStats() {
    const response = await fetch('https://rwrstats.com/api/players/invasion/toby15/stats-history?page=1&limit=25', {
        headers: headers
    });
    const data = await response.json();
    console.table(data);
}
getStats();
