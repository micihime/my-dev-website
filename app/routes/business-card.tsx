import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// --- Basic Info ---
const contactInfo = {
	firstName: "YourFirstName",
	lastName: "YourLastName",
	organization: "Your Company or Brand",
	title: "Your Title",
	email: "your@email.com",
	phone: "+1234567890",
	website: "https://yourwebsite.com",
	address: "123 Main St, City, Country",
};

function generateVCard(info: typeof contactInfo) {
	return `BEGIN:VCARD\nVERSION:3.0\nN:${info.lastName};${info.firstName};;;\nFN:${info.firstName} ${info.lastName}\nORG:${info.organization}\nTITLE:${info.title}\nEMAIL;TYPE=INTERNET:${info.email}\nTEL;TYPE=CELL:${info.phone}\nURL:${info.website}\nADR;TYPE=WORK:;;${info.address};;;;\nEND:VCARD`;
}

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	if (url.searchParams.get("download") === "vcard") {
		const vcard = generateVCard(contactInfo);
		return new Response(vcard, {
			headers: {
				"Content-Type": "text/vcard; charset=utf-8",
				"Content-Disposition": `attachment; filename=business-card.vcf`,
			},
		});
	}
	return json(contactInfo);
};

export default function BusinessCard() {
	const info = useLoaderData<typeof contactInfo>();
	return (
		<div style={{ maxWidth: 400, margin: "2rem auto", padding: 24, borderRadius: 12, boxShadow: "0 2px 16px #0001", background: "#fff" }}>
			<h1 style={{ marginBottom: 8 }}>{info.firstName} {info.lastName}</h1>
			<p style={{ margin: 0, color: '#666' }}>{info.title} @ {info.organization}</p>
			<hr style={{ margin: '16px 0' }} />
			<p><strong>Email:</strong> <a href={`mailto:${info.email}`}>{info.email}</a></p>
			<p><strong>Phone:</strong> <a href={`tel:${info.phone}`}>{info.phone}</a></p>
			<p><strong>Website:</strong> <a href={info.website} target="_blank" rel="noopener noreferrer">{info.website}</a></p>
			<p><strong>Address:</strong> {info.address}</p>
			<a
				href="?download=vcard"
				download="business-card.vcf"
				style={{
					display: "inline-block",
					marginTop: 24,
					padding: "10px 20px",
					background: "#0078d4",
					color: "#fff",
					borderRadius: 6,
					textDecoration: "none",
					fontWeight: 600,
				}}
			>
				Download vCard
			</a>
		</div>
	);
}
