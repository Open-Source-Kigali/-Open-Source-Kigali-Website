import { ArrowUpRight, Zap } from "lucide-react";
import { Badge } from "../UI";

const ProposeAProject = () => {
	return (
		<section
			className="py-20 px-6 md:px-20 relative overflow-hidden"
			style={{ background: "#0a0f1e" }}
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
					backgroundSize: "28px 28px",
				}}
			/>
			<div
				className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, rgba(244,81,30,0.08) 0%, transparent 70%)",
				}}
			/>

			<div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
				<div className="max-w-xl">
					<Badge variant="live" dot className="mb-6">
						Always accepting new ideas
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
						Got a project idea that
						<br />
						<span style={{ color: "#fb923c" }}>solves something real?</span>
					</h2>
					<p className="text-white/50 text-base leading-relaxed">
						OSK incubates open-source projects that address genuine challenges
						in Rwanda and Africa. Bring your idea — we'll help you build a team.
					</p>
				</div>

				<div
					className="rounded-2xl p-7 min-w-72shrink-0 w-full lg:w-auto max-w-sm border border-white/10"
					style={{ background: "rgba(255,255,255,0.05)" }}
				>
					<p className="text-white font-bold text-sm mb-5">
						What a good proposal needs:
					</p>
					<div className="space-y-3">
						{[
							"A real problem that exists in Rwanda or Africa",
							"A rough idea of how software can help",
							"Willingness to be the first maintainer",
							"At least one other person to co-build with",
						].map((item) => (
							<div key={item} className="flex items-start gap-3">
								<Zap size={13} className="text-[#fb923c] shrink-0 mt-0.5" />
								<p className="text-white/60 text-sm leading-snug">{item}</p>
							</div>
						))}
					</div>
					<a
						href="mailto:opensourcekigali@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 w-full py-3 mt-7 rounded-xl text-white text-sm font-bold transition-colors"
						style={{ background: "#2b7fff" }}
						onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6fef")}
						onMouseLeave={(e) => (e.currentTarget.style.background = "#2b7fff")}
					>
						Submit a Proposal <ArrowUpRight size={13} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProposeAProject;
