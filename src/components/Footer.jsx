import { Mail, Shield, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Geonauts Guide
            </h3>
            <p className="text-sm text-gray-600">
              Your AI-powered travel companion for exploring world landmarks, 
              audio tours, and trip planning.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:geonautsguide@gmail.com?subject=App Feedback"
                  className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send Feedback
                </a>
              </li>
              <li>
                <a
                  href="mailto:geonautsguide@gmail.com?subject=Support Request"
                  className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Geonauts Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
