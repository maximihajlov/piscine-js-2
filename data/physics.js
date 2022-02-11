function getAcceleration(obj) {
    if (obj.f && obj.m) {
        return obj.f / obj.m
    }
    if (obj.Δv && obj.Δt) {
        return obj.Δv / obj.Δt
    }
    if (obj.d && obj.t) {
        return 2 * obj.d / (obj.t * obj.t)
    }
    return "impossible"
}