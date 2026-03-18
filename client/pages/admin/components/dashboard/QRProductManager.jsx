import React, { useState, useRef } from 'react';
import { QrCode, Download, Upload, Zap, Loader2, Image as ImageIcon, X } from 'lucide-react';

const QRProductManager = () => {
    const [formData, setFormData] = useState({
        productName: '',
        sku: '',
        price: ''
    });

    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedQR, setGeneratedQR] = useState(null);

    // New state for image upload handling
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit mock
                alert("Image size should be less than 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleGenerate = () => {
        if (!formData.productName) return alert("Please enter a product name first");

        setIsGenerating(true);
        setGeneratedQR(null);

        // Simulate generation delay and actual generation logic
        setTimeout(() => {
            // Mock generated QR visual state, including the uploaded image
            const skuVal = formData.sku || `SKU-${Math.floor(Math.random() * 10000)}`;

            setGeneratedQR({
                name: formData.productName,
                sku: skuVal,
                price: formData.price || '0',
                image: selectedImage,
                // Using a real free API to generate a working sample QR code based on the data
                url: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=scanpay-item:${skuVal}`
            });
            setIsGenerating(false);

            // Clear form after successful generation
            setFormData({ productName: '', sku: '', price: '' });
            removeImage();
        }, 1200);
    };

    const handleDownload = () => {
        if (!generatedQR) return;

        // Simulate download using the API URL directly
        const link = document.createElement('a');
        link.href = generatedQR.url;
        link.download = `QR-${generatedQR.sku}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="card qr-manager-card">
            <div className="card-header border-bottom">
                <div>
                    <h3 className="card-title">QR Code Generator</h3>
                    <p className="text-sm text-secondary mt-1">Generate scan-to-pay codes for new inventory</p>
                </div>
            </div>

            <div className="qr-manager-content">
                <form className="qr-form" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
                    <div className="form-group">
                        <label className="form-label">Product Name & Title <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="e.g. Vintage Leather Jacket"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group flex-1">
                            <label className="form-label">SKU (Optional)</label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Auto-generated if blank"
                            />
                        </div>
                        <div className="form-group flex-1">
                            <label className="form-label">Price (₹)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="5990"
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Product Image (For User Checkout View)</label>

                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />

                        {selectedImage ? (
                            <div className="relative border border-border-color rounded-md overflow-hidden bg-bg-main" style={{ height: '140px' }}>
                                <img src={selectedImage} alt="Preview" className="w-full h-full object-contain" />
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="absolute top-2 right-2 bg-white text-danger border border-border-color rounded-full p-1 shadow-sm hover:bg-danger-light"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ) : (
                            <div
                                className="upload-dropzone"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <Upload size={24} className="text-tertiary mb-2" />
                                <p className="text-sm font-medium">Click to upload product image</p>
                                <p className="text-xs text-secondary mt-1">SVG, PNG, JPG (max. 5MB)</p>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-2"
                        disabled={isGenerating || !formData.productName}
                        style={{ opacity: (!formData.productName || isGenerating) ? 0.7 : 1 }}
                    >
                        {isGenerating ? (
                            <><Loader2 size={18} className="mr-2 animate-spin" /> Generating Code...</>
                        ) : (
                            <><QrCode size={18} className="mr-2" /> Generate QR Code</>
                        )}
                    </button>
                </form>

                {generatedQR && (
                    <div className="p-6 border-t border-border-color bg-success-light flex gap-6 items-center flex-wrap">
                        <div className="bg-white p-3 rounded-xl shadow-md border border-border-color shrink-0 flex flex-col items-center">
                            <img src={generatedQR.url} alt="QR Code" width="140" height="140" className="mb-2" />
                            <span className="text-xs font-mono font-bold text-secondary">SCANPAY</span>
                        </div>

                        <div className="flex-1 min-w-[200px]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-xl text-primary-text mb-1">{generatedQR.name}</h4>
                                    <span className="inline-block bg-white px-2 py-1 rounded text-xs font-mono border border-border-color mb-3">
                                        {generatedQR.sku}
                                    </span>
                                </div>
                                {generatedQR.image && (
                                    <div className="w-16 h-16 rounded shadow-sm overflow-hidden border border-border-color bg-white">
                                        <img src={generatedQR.image} alt="Thumb" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            <p className="text-2xl font-bold text-success mb-4">₹{generatedQR.price}</p>

                            <div className="flex gap-2">
                                <button className="btn btn-primary text-sm flex-1 flex justify-center items-center gap-2">
                                    Print Tag
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="btn bg-white border border-border-color text-sm flex-1 flex justify-center items-center gap-2 hover:bg-gray-50"
                                >
                                    <Download size={16} /> Save PNG
                                </button>
                            </div>
                        </div>

                        {/* Success message overlay layout effect */}
                        <div className="w-full mt-2 flex items-center gap-2 text-success font-medium text-sm bg-white p-2 rounded border border-success-light">
                            <Zap size={16} /> QR Ready! Customers can now scan this code to checkout.
                        </div>
                    </div>
                )}

                {/* CSS for spinning loader and hidden utility */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin { animation: spin 1s linear infinite; }
          .hidden { display: none; }
          .shrink-0 { flex-shrink: 0; }
          .min-w-\\[200px\\] { min-width: 200px; }
          .object-cover { object-fit: cover; }
          .object-contain { object-fit: contain; }
          .rounded-xl { border-radius: 0.75rem; }
        `}} />

                <div className="qr-stats-container">
                    <h4 className="font-semibold mb-4">QR Manager Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="qr-stat-box flex-1">
                            <div className="flex items-center gap-3">
                                <div className="stat-icon bg-primary-light text-primary">
                                    <QrCode size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary mb-1">Generated</p>
                                    <p className="text-lg font-bold">{generatedQR ? '12,483' : '12,482'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="qr-stat-box flex-1">
                            <div className="flex items-center gap-3">
                                <div className="stat-icon bg-success-light text-success">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary mb-1">Scans Today</p>
                                    <p className="text-lg font-bold">4,195</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRProductManager;
