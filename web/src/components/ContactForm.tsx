import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      property: String(formData.get('property') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  const inputClass =
    'w-full border border-ink/12 bg-white px-4 py-3 text-ink placeholder-ink-faint/60 transition-colors focus:border-gold focus:outline-none';

  if (status === 'success') {
    return (
      <div className="bg-cream p-8 text-center md:p-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-display mb-2 text-2xl text-ink">Thank you</h3>
        <p className="text-ink-muted">
          We've received your enquiry. Our team will be in touch within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-gold-muted transition-colors hover:text-gold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-cream p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block text-ink-faint">
              Full name
            </label>
            <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow mb-2 block text-ink-faint">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="eyebrow mb-2 block text-ink-faint">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+971 ..." />
          </div>
          <div>
            <label htmlFor="property" className="eyebrow mb-2 block text-ink-faint">
              Property location
            </label>
            <input
              id="property"
              name="property"
              type="text"
              className={inputClass}
              placeholder="e.g. Downtown Dubai"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="eyebrow mb-2 block text-ink-faint">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your property..."
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'loading' ? 'Sending...' : 'Submit enquiry'}
        </button>
      </form>
    </div>
  );
}
