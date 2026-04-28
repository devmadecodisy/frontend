import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CreditCard, X } from 'lucide-react';
import '../../styles/PaymentQR.css';

interface PaymentQRProps {
  isOpen: boolean;
  onClose: () => void;
  fundName: string;
  amount: number;
}

const PaymentQR: React.FC<PaymentQRProps> = ({ isOpen, onClose, fundName, amount }) => {

  if (!isOpen) return null;

  const finalAmount = Math.max(amount, 5000);
  const upiString = `upi://pay?pa=raj483253-1@okicici&pn=Raviraj&am=${finalAmount}&tn=${fundName}`;

  return (
    <div className="payment-qr-overlay">
      <div className="payment-qr-modal">
        <div className="payment-qr-header">
          <h2>
            <CreditCard size={24} /> Payment QR Code
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="payment-qr-content">
          <div className="payment-details">
            <p><strong>Fund:</strong> {fundName}</p>
            <p><strong>Amount:</strong> ₹{finalAmount.toLocaleString()}</p>
            <p><strong>Method:</strong> UPI / Bank Transfer</p>
          </div>

          <div className="qr-code-container">
            <h3>Scan to Pay</h3>
            <div className="qr-code-box">
              <QRCodeSVG
                value={upiString}
                size={250}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>
            <p className="qr-instruction">Use any UPI app to scan this QR code.</p>
          </div>

          <div className="payment-info">
            <h4>Payment Details</h4>
            <div className="info-box">
              <p><strong>Account Name:</strong> Raviraj</p>
              <p><strong>UPI ID:</strong> raj483253-1@okicici</p>
              <p><strong>Bank:</strong> CBI</p>
            </div>
          </div>

          <button className="btn-confirm" onClick={onClose}>
            Payment Confirmed ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;
