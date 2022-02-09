function findIP(str) {
    let ips = str.match(/[\d]{1,3}[.][\d]{1,3}[.][\d]{1,3}[.][\d]{1,3}([:]\d+)?/g)

    ips = ips.filter(ip => {
        let nums = ip.split(':')[0].split('.')
        let port = ip.split(':')[1]
        if (port && String(Number(port)) !== port) return false

        for (let i = 0; i < 4; i++) {
            if (nums[i] > 255 || String(Number(nums[i])) !== nums[i]) return false
        }
        return true
    })

    return ips
}
