interface Step {
  step: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  heading?: string;
}

export default function ProcessSteps({
  steps,
  heading = "How We Work",
}: ProcessStepsProps) {
  return (
    <section className="section-padding section-alt" aria-labelledby="process-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="text-slate-900 mb-4">
            {heading}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A clear, transparent process from first call to final handover.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full gradient-brand flex flex-col items-center justify-center text-white shadow-lg">
                    <span className="text-xs font-semibold opacity-70 leading-none">STEP</span>
                    <span className="text-2xl font-black leading-none">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden absolute top-1/2 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2 ml-2"
                    />
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
