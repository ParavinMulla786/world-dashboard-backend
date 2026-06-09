const getDashboardData = async (req, res) => {
    try {
        // Write database queries here

        res.status(200).json({
            success: true,
            message: "Dashboard data fetched successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = {
    getDashboardData
};