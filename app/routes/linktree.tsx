const links = [
	{
		title: "My Portfolio",
		description: "See my web development projects and case studies.",
		url: "/portfolio",
	},
	{
		title: "Contact Me",
		description: "Get in touch for collaborations or freelance work.",
		url: "/contact",
	},
	{
		title: "Business Card",
		description: "Digital business card with all my details.",
		url: "/business-card",
	},
	// Add more links as needed
];

export default function Linktree() {
	return (
		<div style={{
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			background: "#f7f7f7",
			padding: "2rem 1rem"
		}}>
			<img
				src={"/img/profile.jpg"}
				alt="Profile"
				style={{
					width: 120,
					height: 120,
					borderRadius: "50%",
					objectFit: "cover",
					marginBottom: 16,
					border: "4px solid #fff",
					boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
				}}
			/>
			<h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>Your Name</h1>
			<p style={{ color: "#666", margin: "8px 0 24px 0", textAlign: "center", maxWidth: 320 }}>
				Welcome! Here are all my important links. Follow me for updates and more.
			</p>
			<div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 16 }}>
				{links.map((link) => (
					<div
						key={link.url}
						style={{
							background: "#fff",
							borderRadius: 12,
							boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
							padding: 20,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start"
						}}
					>
						<div style={{ fontWeight: 600, fontSize: 18 }}>{link.title}</div>
						<div style={{ color: "#888", fontSize: 14, margin: "6px 0 12px 0" }}>{link.description}</div>
						<a
							href={link.url}
							style={{
								background: "#0077ff",
								color: "#fff",
								padding: "8px 18px",
								borderRadius: 8,
								textDecoration: "none",
								fontWeight: 500,
								fontSize: 15,
								alignSelf: "flex-start"
							}}
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
