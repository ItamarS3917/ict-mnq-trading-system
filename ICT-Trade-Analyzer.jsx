import React, { useState } from 'react';

export default function ICTTradeAnalyzer() {
  const [formData, setFormData] = useState({
    session: 'NY AM',
    time: '',
    currentPrice: '',
    pdh: '',
    pdl: '',
    pwh: '',
    pwl: '',
    asiaHigh: '',
    asiaLow: '',
    htfBias: 'Bullish',
    biasReason: '',
    liquidityTaken: '',
    fvgLevels: '',
    obLevels: '',
    news: 'None',
    dailyPnL: '0',
    tradesToday: '0',
    setupDescription: ''
  });

  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOutput = () => {
    const template = `SESSION: ${formData.session}
TIME (ET): ${formData.time}
CURRENT PRICE: ${formData.currentPrice}
PDH: ${formData.pdh}
PDL: ${formData.pdl}
PWH: ${formData.pwh || 'N/A'}
PWL: ${formData.pwl || 'N/A'}
ASIA HIGH: ${formData.asiaHigh || 'N/A'}
ASIA LOW: ${formData.asiaLow || 'N/A'}
HTF BIAS: ${formData.htfBias}
BIAS REASON: ${formData.biasReason}
LIQUIDITY TAKEN: ${formData.liquidityTaken || 'None yet'}
FVG LEVELS: ${formData.fvgLevels || 'None identified'}
OB LEVELS: ${formData.obLevels || 'None identified'}
NEWS: ${formData.news}
DAILY P&L: $${formData.dailyPnL}
TRADES TODAY: ${formData.tradesToday}
SETUP: ${formData.setupDescription}`;
    
    setOutput(template);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearForm = () => {
    setFormData({
      session: 'NY AM',
      time: '',
      currentPrice: '',
      pdh: '',
      pdl: '',
      pwh: '',
      pwl: '',
      asiaHigh: '',
      asiaLow: '',
      htfBias: 'Bullish',
      biasReason: '',
      liquidityTaken: '',
      fvgLevels: '',
      obLevels: '',
      news: 'None',
      dailyPnL: '0',
      tradesToday: '0',
      setupDescription: ''
    });
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-2 text-emerald-400">
          ICT Trade Analyzer
        </h1>
        <p className="text-center text-gray-400 mb-6 text-sm">
          MNQ $50K MFFU Evaluation System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Form */}
          <div className="space-y-4">
            {/* Session Info */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">Session Info</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Session</label>
                  <select
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option>London</option>
                    <option>NY AM</option>
                    <option>NY PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Time (ET)</label>
                  <input
                    type="text"
                    name="time"
                    placeholder="10:15"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Key Levels */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">Key Levels</h2>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Current Price *</label>
                  <input
                    type="text"
                    name="currentPrice"
                    placeholder="21450"
                    value={formData.currentPrice}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">PDH *</label>
                  <input
                    type="text"
                    name="pdh"
                    placeholder="21500"
                    value={formData.pdh}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">PDL *</label>
                  <input
                    type="text"
                    name="pdl"
                    placeholder="21350"
                    value={formData.pdl}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">PWH</label>
                  <input
                    type="text"
                    name="pwh"
                    placeholder="21600"
                    value={formData.pwh}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">PWL</label>
                  <input
                    type="text"
                    name="pwl"
                    placeholder="21200"
                    value={formData.pwl}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Asia High</label>
                  <input
                    type="text"
                    name="asiaHigh"
                    placeholder="21420"
                    value={formData.asiaHigh}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Asia Low</label>
                  <input
                    type="text"
                    name="asiaLow"
                    placeholder="21380"
                    value={formData.asiaLow}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Bias */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">HTF Bias</h2>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {['Bullish', 'Bearish', 'Neutral'].map((bias) => (
                  <button
                    key={bias}
                    onClick={() => setFormData({ ...formData, htfBias: bias })}
                    className={`py-2 px-3 rounded text-sm font-medium transition-colors ${
                      formData.htfBias === bias
                        ? bias === 'Bullish'
                          ? 'bg-green-600 text-white'
                          : bias === 'Bearish'
                          ? 'bg-red-600 text-white'
                          : 'bg-yellow-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {bias}
                  </button>
                ))}
              </div>
              <input
                type="text"
                name="biasReason"
                placeholder="HH/HL on 4H, above PDL..."
                value={formData.biasReason}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* ICT Levels */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">ICT Levels</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Liquidity Taken</label>
                  <input
                    type="text"
                    name="liquidityTaken"
                    placeholder="Swept PDL at 09:35"
                    value={formData.liquidityTaken}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">FVG Levels</label>
                  <input
                    type="text"
                    name="fvgLevels"
                    placeholder="Bullish FVG: 21380-21400"
                    value={formData.fvgLevels}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Order Block Levels</label>
                  <input
                    type="text"
                    name="obLevels"
                    placeholder="Bullish OB: 21360-21375"
                    value={formData.obLevels}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">Context</h2>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">News</label>
                  <input
                    type="text"
                    name="news"
                    placeholder="None"
                    value={formData.news}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Daily P&L</label>
                  <input
                    type="text"
                    name="dailyPnL"
                    placeholder="0"
                    value={formData.dailyPnL}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Trades Today</label>
                  <input
                    type="text"
                    name="tradesToday"
                    placeholder="0"
                    value={formData.tradesToday}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Setup Description *</label>
                <textarea
                  name="setupDescription"
                  placeholder="Price swept PDL, created bullish displacement with FVG..."
                  value={formData.setupDescription}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={generateOutput}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded transition-colors"
              >
                Generate Request
              </button>
              <button
                onClick={clearForm}
                className="px-4 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 rounded transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Right Column - Output */}
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg h-full flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">Output</h2>
                {output && (
                  <button
                    onClick={copyToClipboard}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      copied
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    {copied ? '✓ Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              
              {output ? (
                <pre className="bg-gray-900 p-4 rounded text-xs text-gray-300 overflow-auto flex-1 whitespace-pre-wrap font-mono">
                  {output}
                </pre>
              ) : (
                <div className="bg-gray-900 p-4 rounded flex-1 flex items-center justify-center text-gray-500 text-sm">
                  Fill in the form and click "Generate Request"
                </div>
              )}

              {output && (
                <div className="mt-4 p-3 bg-blue-900/30 border border-blue-700 rounded text-xs text-blue-300">
                  <strong>Next step:</strong> Copy this output and paste it into a new Claude chat. 
                  Claude will analyze your setup and provide entry, SL, and TP levels.
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide">Account Status</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Daily P&L</p>
                  <p className={`text-xl font-bold ${
                    parseFloat(formData.dailyPnL) >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    ${formData.dailyPnL || '0'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Remaining Risk</p>
                  <p className="text-xl font-bold text-yellow-400">
                    ${2500 - Math.abs(parseFloat(formData.dailyPnL) || 0)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Trades Today</p>
                  <p className="text-xl font-bold text-gray-100">{formData.tradesToday || '0'}/4</p>
                </div>
                <div>
                  <p className="text-gray-400">To Target</p>
                  <p className="text-xl font-bold text-emerald-400">
                    ${3000 - (parseFloat(formData.dailyPnL) || 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
