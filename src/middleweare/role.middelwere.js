export const checkRole = (roles) => {
    return (req, res, next) => {
        console.log("User role", req.user);
        if (!roles.includes(req.user?.role)) {
            res.status(403).json({ message: "Forbidden" });
            return;
        }
        next();
    };
};
//# sourceMappingURL=role.middelwere.js.map