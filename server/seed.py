from models import db, User

def get_dashboard_data(phone=None):
    if phone:
        user = User.query.filter_by(phone=phone).first()
    else:
        user = None

    if not user:
        return {
            "user": {
                "name": "Guest",
                "avatar": "https://via.placeholder.com/40",
                "membership": "Free Member"
            },
            "welcomeMessage": {
                "title": "Welcome!",
                "body": "Register and start earning by referring others."
            },
            "referralLink": None,
            "stats": [],
            "recentActivity": [],
            "referralHistory": []
        }

    return {
        "user": {
            "name": user.name,
            "avatar": user.avatar or "https://via.placeholder.com/40",
            "membership": user.membership or "Free Member"
        },
        "welcomeMessage": {
            "title": f"Welcome back, {user.name.split()[0]}!",
            "body": "You've earned 2,500 KSh this week. Keep referring to earn more!"
        },
        "referralLink": f"https://keschain.co.ke/ref/{user.name.lower().replace(' ', '')}123",
        "stats": [
            {"label": "Total Earnings", "amount": "5,750 KSh", "icon": "fas fa-coins", "type": "earnings"},
            {"label": "Successful Referrals", "amount": "32", "icon": "fas fa-user-plus", "type": "referrals"},
            {"label": "Available Balance", "amount": "1,250 KSh", "icon": "fas fa-wallet", "type": "balance"},
            {"label": "Total Withdrawn", "amount": "4,500 KSh", "icon": "fas fa-money-bill-wave", "type": "withdrawn"},
        ],
        "recentActivity": [
            {"title": "New Referral", "description": "James Mwangi joined using your link", "amount": "+100 KSh", "icon": "fas fa-user-plus"},
            {"title": "Withdrawal", "description": "Sent to M-Pesa (0722***456)", "amount": "-1,000 KSh", "icon": "fas fa-money-bill-wave"},
            {"title": "Bonus Earned", "description": "Weekly bonus for active referrals", "amount": "+200 KSh", "icon": "fas fa-coins"}
        ],
        "referralHistory": [
            {"name": "James Mwangi", "phone": "0722***123", "date": "Today, 10:30 AM", "status": "Completed", "earnings": "+100 KSh"},
            {"name": "Sarah Kamau", "phone": "0711***456", "date": "Yesterday, 4:15 PM", "status": "Completed", "earnings": "+100 KSh"},
            {"name": "Grace Wambui", "phone": "0798***012", "date": "Mar 14, 2023", "status": "Pending", "earnings": "+100 KSh"}
        ]
    }
