const { useState, useEffect, useRef } = React;

// 言語ごとの翻訳データ
const translations = {
  en: {
    title: "P2P Encrypted Chat",
    enterName: "Please enter your name",
    namePlaceholder: "Your name",
    start: "Start",
    yourPeerId: "Your Peer ID",
    copy: "Copy",
    connect: "Connect",
    connecting: "Connecting...",
    connectionStatus: "Connection Status",
    notConnected: "Not Connected",
    peerIdGenerated: "Peer ID Generated",
    connected: "Connected",
    disconnected: "Disconnected",
    error: "Error",
    connectToPeer: "Connect",
    enterPeerId: "Enter the Peer ID to connect",
    chat: "Chat",
    disconnect: "Disconnect",
    inputPlaceholder: "Type a message...",
    send: "Send",
    keyReceived: "Encryption key received",
    keySent: "Encryption key sent",
    connectionEstablished: "Connection established",
    connectionClosed: "Connection closed",
    newMessage: "New message received",
    copyPeerId: "Peer ID copied to clipboard",
    enterPeerIdPrompt: "Please enter a Peer ID",
    noConnection: "A connection and encryption key are required to send a message",
    keyImportFailed: "Failed to import encryption key",
    keyGenerationFailed: "Failed to generate encryption key",
    connectionError: "Connection error",
    typing: "is typing...",
    language: "Language",
  },
  ja: {
    title: "P2P暗号化チャット",
    enterName: "名前を入力してください",
    namePlaceholder: "あなたの名前",
    start: "開始",
    yourPeerId: "あなたのPeer ID",
    copy: "コピー",
    connect: "接続",
    connecting: "接続中...",
    connectionStatus: "接続状態",
    notConnected: "未接続",
    peerIdGenerated: "Peer ID 生成済み",
    connected: "接続済み",
    disconnected: "切断されました",
    error: "エラー",
    connectToPeer: "接続",
    enterPeerId: "接続するPeer IDを入力",
    chat: "チャット",
    disconnect: "切断",
    inputPlaceholder: "メッセージを入力...",
    send: "送信",
    keyReceived: "暗号化キーを受信しました",
    keySent: "暗号化キーを送信しました",
    connectionEstablished: "接続が確立されました",
    connectionClosed: "接続が切断されました",
    newMessage: "新しいメッセージが届きました",
    copyPeerId: "Peer IDをクリップボードにコピーしました",
    enterPeerIdPrompt: "Peer IDを入力してください",
    noConnection: "メッセージを送信するには接続と暗号化キーが必要です",
    keyImportFailed: "暗号化キーのインポートに失敗しました",
    keyGenerationFailed: "暗号化キーの生成に失敗しました",
    connectionError: "接続エラー",
    typing: "入力しています...",
    language: "言語",
  },
  zh: {
    title: "P2P加密聊天",
    enterName: "请输入您的姓名",
    namePlaceholder: "您的姓名",
    start: "开始",
    yourPeerId: "您的Peer ID",
    copy: "复制",
    connect: "连接",
    connecting: "连接中...",
    connectionStatus: "连接状态",
    notConnected: "未连接",
    peerIdGenerated: "Peer ID已生成",
    connected: "已连接",
    disconnected: "已断开",
    error: "错误",
    connectToPeer: "连接",
    enterPeerId: "输入要连接的Peer ID",
    chat: "聊天",
    disconnect: "断开",
    inputPlaceholder: "输入消息...",
    send: "发送",
    keyReceived: "已接收加密密钥",
    keySent: "已发送加密密钥",
    connectionEstablished: "连接已建立",
    connectionClosed: "连接已断开",
    newMessage: "收到新消息",
    copyPeerId: "Peer ID已复制到剪贴板",
    enterPeerIdPrompt: "请输入Peer ID",
    noConnection: "发送消息需要连接和加密密钥",
    keyImportFailed: "导入加密密钥失败",
    keyGenerationFailed: "生成加密密钥失败",
    connectionError: "连接错误",
    typing: "正在输入...",
    language: "语言",
  },
  hi: {
    title: "P2P एन्क्रिप्टेड चैट",
    enterName: "कृपया अपना नाम दर्ज करें",
    namePlaceholder: "आपका नाम",
    start: "शुरू करें",
    yourPeerId: "आपका Peer ID",
    copy: "कॉपी करें",
    connect: "कनेक्ट करें",
    connecting: "कनेक्ट हो रहा है...",
    connectionStatus: "कनेक्शन स्थिति",
    notConnected: "कनेक्ट नहीं हुआ",
    peerIdGenerated: "Peer ID जनरेट हो गया",
    connected: "कनेक्ट हो गया",
    disconnected: "डिस्कनेक्ट हो गया",
    error: "त्रुटि",
    connectToPeer: "कनेक्ट करें",
    enterPeerId: "कनेक्ट करने के लिए Peer ID दर्ज करें",
    chat: "चैट",
    disconnect: "डिस्कनेक्ट",
    inputPlaceholder: "संदेश टाइप करें...",
    send: "भेजें",
    keyReceived: "एन्क्रिप्शन कुंजी प्राप्त हुई",
    keySent: "एन्क्रिप्शन कुंजी भेजी गई",
    connectionEstablished: "कनेक्शन स्थापित हो गया",
    connectionClosed: "कनेक्शन बंद हो गया",
    newMessage: "नया संदेश प्राप्त हुआ",
    copyPeerId: "Peer ID क्लिपबोर्ड पर कॉपी हो गया",
    enterPeerIdPrompt: "कृपया Peer ID दर्ज करें",
    noConnection: "संदेश भेजने के लिए कनेक्शन और एन्क्रिप्शन कुंजी आवश्यक है",
    keyImportFailed: "एन्क्रिप्शन कुंजी आयात करने में विफल",
    keyGenerationFailed: "एन्क्रिप्शन कुंजी जनरेट करने में विफल",
    connectionError: "कनेक्शन त्रुटि",
    typing: "टाइप कर रहा है...",
    language: "भाषा",
  },
  es: {
    title: "Chat Encriptado P2P",
    enterName: "Por favor, introduce tu nombre",
    namePlaceholder: "Tu nombre",
    start: "Iniciar",
    yourPeerId: "Tu Peer ID",
    copy: "Copiar",
    connect: "Conectar",
    connecting: "Conectando...",
    connectionStatus: "Estado de la Conexión",
    notConnected: "No Conectado",
    peerIdGenerated: "Peer ID Generado",
    connected: "Conectado",
    disconnected: "Desconectado",
    error: "Error",
    connectToPeer: "Conectar",
    enterPeerId: "Introduce el Peer ID para conectar",
    chat: "Chat",
    disconnect: "Desconectar",
    inputPlaceholder: "Escribe un mensaje...",
    send: "Enviar",
    keyReceived: "Clave de encriptación recibida",
    keySent: "Clave de encriptación enviada",
    connectionEstablished: "Conexión establecida",
    connectionClosed: "Conexión cerrada",
    newMessage: "Nuevo mensaje recibido",
    copyPeerId: "Peer ID copiado al portapapeles",
    enterPeerIdPrompt: "Por favor, introduce un Peer ID",
    noConnection: "Se requiere una conexión y una clave de encriptación para enviar un mensaje",
    keyImportFailed: "Fallo al importar la clave de encriptación",
    keyGenerationFailed: "Fallo al generar la clave de encriptación",
    connectionError: "Error de conexión",
    typing: "está escribiendo...",
    language: "Idioma",
  }
};

function App() {
  const [peerId, setPeerId] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('notConnected');
  const [isTyping, setIsTyping] = useState(false);
  const [notification, setNotification] = useState('');
  const [userName, setUserName] = useState('');
  const [remoteName, setRemoteName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const peerInstance = useRef(null);
  const connRef = useRef(null);
  const cryptoKey = useRef(null);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // 言語保存
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // 翻訳関数
  const t = (key) => translations[language][key] || translations.en[key];

  // 通知表示
  const showNotification = (msg) => {
    setNotification(t(msg));
    setTimeout(() => setNotification(''), 3000);
  };

  // 暗号化キーの生成
  const generateKey = async () => {
    try {
      return await window.crypto.subtle.generateKey(
        {
          name: 'AES-GCM',
          length: 256,
        },
        true,
        ['encrypt', 'decrypt']
      );
    } catch (e) {
      showNotification('keyGenerationFailed');
      return null;
    }
  };

  // ArrayBufferをBase64に変換
  const arrayBufferToBase64 = (buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // Base64をArrayBufferに変換
  const base64ToArrayBuffer = (base64) => {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  };

  // メッセージの暗号化
  const encryptMessage = async (text) => {
    if (!cryptoKey.current) {
      showNotification('noConnection');
      return null;
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      cryptoKey.current,
      data
    );
    return { 
      iv: arrayBufferToBase64(iv), 
      encrypted: arrayBufferToBase64(encrypted) 
    };
  };

  // メッセージの復号化
  const decryptMessage = async ({ iv, encrypted }) => {
    try {
      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: base64ToArrayBuffer(iv),
        },
        cryptoKey.current,
        base64ToArrayBuffer(encrypted)
      );
      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
    } catch (e) {
      return 'Decryption Error';
    }
  };

  // キーを ArrayBuffer に変換して送信
  const exportKey = async (key) => {
    const exported = await window.crypto.subtle.exportKey('raw', key);
    return arrayBufferToBase64(exported);
  };

  // タイムスタンプのフォーマット
  const formatTimestamp = () => {
    return new Date().toLocaleString(language === 'zh' ? 'zh-CN' : language, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // タイピングインジケーター
  const handleTyping = () => {
    if (connRef.current) {
      connRef.current.send({ type: 'typing', user: userName });
      
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      typingTimeoutRef.current = setTimeout(() => {
        if (connRef.current) {
          connRef.current.send({ type: 'stop-typing' });
        }
      }, 2000);
    }
  };

  // データ受信処理
  const handleData = async (data) => {
    if (data.type === 'key') {
      try {
        cryptoKey.current = await window.crypto.subtle.importKey(
          'raw',
          base64ToArrayBuffer(data.key),
          { name: 'AES-GCM' },
          false,
          ['encrypt', 'decrypt']
        );
        setMessages(prev => [...prev, { sender: 'system', text: t('keyReceived'), timestamp: formatTimestamp() }]);
      } catch (e) {
        showNotification('keyImportFailed');
      }
    } else if (data.type === 'message') {
      const decryptedText = await decryptMessage(data);
      setMessages(prev => [...prev, { sender: 'remote', text: decryptedText, timestamp: formatTimestamp() }]);
      showNotification('newMessage');
    } else if (data.type === 'typing') {
      setRemoteName(data.user || t('remoteUser'));
      setIsTyping(true);
    } else if (data.type === 'stop-typing') {
      setIsTyping(false);
    } else if (data.type === 'user-info') {
      setRemoteName(data.name);
    }
  };

  // メッセージ更新時に最下部にスクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const peer = new Peer({
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
        ]
      }
    });
    peerInstance.current = peer;

    peer.on('open', async (id) => {
      setPeerId(id);
      setConnectionStatus('peerIdGenerated');
      cryptoKey.current = await generateKey();
    });

    peer.on('connection', (conn) => {
      connRef.current = conn;
      setConnectionStatus('connected');
      showNotification('connectionEstablished');
      
      conn.on('data', handleData);
      
      conn.on('close', () => {
        setConnectionStatus('disconnected');
        setMessages(prev => [...prev, { sender: 'system', text: t('connectionClosed'), timestamp: formatTimestamp() }]);
        connRef.current = null;
        showNotification('connectionClosed');
      });
    });

    peer.on('error', (err) => {
      setMessages(prev => [...prev, { sender: 'system', text: `${t('error')}: ${err.message}`, timestamp: formatTimestamp() }]);
      setConnectionStatus(`error`);
      showNotification(`${t('error')}: ${err.message}`);
    });

    return () => peer.destroy();
  }, []);

  const connectToPeer = async () => {
    if (!remotePeerId) {
      showNotification('enterPeerIdPrompt');
      return;
    }
    setConnectionStatus('connecting');
    const conn = peerInstance.current.connect(remotePeerId);
    connRef.current = conn;
    
    conn.on('open', async () => {
      setConnectionStatus('connected');
      const keyData = await exportKey(cryptoKey.current);
      conn.send({ type: 'key', key: keyData });
      
      if (userName) {
        conn.send({ type: 'user-info', name: userName });
      }
      
      setMessages(prev => [...prev, { sender: 'system', text: t('keySent'), timestamp: formatTimestamp() }]);
      showNotification('connectionEstablished');
      
      conn.on('data', handleData);
      
      conn.on('close', () => {
        setConnectionStatus('disconnected');
        setMessages(prev => [...prev, { sender: 'system', text: t('connectionClosed'), timestamp: formatTimestamp() }]);
        connRef.current = null;
        showNotification('connectionClosed');
      });
    });
    
    conn.on('error', (err) => {
      setMessages(prev => [...prev, { sender: 'system', text: `${t('connectionError')}: ${err.message}`, timestamp: formatTimestamp() }]);
      setConnectionStatus(`error`);
      showNotification(`${t('connectionError')}: ${err.message}`);
    });
  };

  const sendMessage = async () => {
    if (message && connRef.current && cryptoKey.current) {
      const encryptedMessage = await encryptMessage(message);
      if (!encryptedMessage) {
        return;
      }
      connRef.current.send({ type: 'message', ...encryptedMessage });
      setMessages(prev => [...prev, { sender: 'local', text: message, timestamp: formatTimestamp() }]);
      setMessage('');
      
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        connRef.current.send({ type: 'stop-typing' });
      }
    } else {
      showNotification('noConnection');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    handleTyping();
  };

  const copyPeerId = () => {
    navigator.clipboard.writeText(peerId);
    showNotification('copyPeerId');
  };

  const disconnect = () => {
    if (connRef.current) {
      connRef.current.close();
      connRef.current = null;
      setConnectionStatus('disconnected');
      showNotification('connectionClosed');
    }
  };

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setIsNameSet(true);
    } else {
      showNotification('enterName');
    }
  };

  // 名前入力画面
  if (!isNameSet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center gradient-bg bg-clip-text text-transparent">
            {t('enterName')}
          </h1>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={t('namePlaceholder')}
            className="w-full p-3 border rounded-lg border-gray-300 mb-4"
            onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{t('language')}</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 border rounded-lg border-gray-300"
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
              <option value="hi">हिन्दी</option>
              <option value="es">Español</option>
            </select>
          </div>
          <button
            onClick={handleNameSubmit}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('start')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* 通知 */}
        {notification && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
            {notification}
          </div>
        )}

        {/* ヘッダー（接続前） */}
        {connectionStatus !== 'connected' && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold gradient-bg bg-clip-text text-transparent">
                {t('title')}
              </h1>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t('yourPeerId')}</label>
                <div className="flex">
                  <input
                    type="text"
                    value={peerId}
                    readOnly
                    className="flex-1 p-2 border rounded-l-lg border-gray-300 font-mono text-sm"
                  />
                  <button
                    onClick={copyPeerId}
                    disabled={!peerId}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 disabled:opacity-50 transition-colors"
                  >
                    {t('copy')}
                  </button>
                </div>
              </div>
            </div>
            
            <div className={`mt-4 p-3 rounded-lg ${connectionStatus === 'connected' ? 'bg-green-100 text-green-800' : connectionStatus.includes('error') ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'} connection-status`}>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${connectionStatus === 'connected' ? 'bg-green-500' : connectionStatus.includes('error') ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                {t('connectionStatus')}: {t(connectionStatus)}
              </div>
            </div>
          </div>
        )}

        {/* 接続セクション（接続前） */}
        {connectionStatus !== 'connected' && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('connectToPeer')}</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={remotePeerId}
                onChange={(e) => setRemotePeerId(e.target.value)}
                placeholder={t('enterPeerId')}
                className="flex-1 p-3 border rounded-lg border-gray-300"
              />
              <button
                onClick={connectToPeer}
                disabled={!remotePeerId || connectionStatus === 'connecting'}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
              >
                {connectionStatus === 'connecting' ? t('connecting') : t('connect')}
              </button>
            </div>
          </div>
        )}

        {/* チャットセクション（接続後） */}
        {connectionStatus === 'connected' && (
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {t('chat')} {remoteName && `with ${remoteName}`}
              </h2>
              <button
                onClick={disconnect}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                🔌 {t('disconnect')}
              </button>
            </div>
            
            {/* メッセージエリア */}
            <div className="h-[60vh] overflow-y-auto border-2 border-dashed p-4 mb-4 rounded-lg bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 message-animation ${
                    msg.sender === 'local' ? 'text-right' : 
                    msg.sender === 'system' ? 'text-center' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg max-w-xs sm:max-w-md ${
                      msg.sender === 'local' 
                        ? 'bg-blue-500 text-white' 
                        : msg.sender === 'system' 
                          ? 'bg-gray-200 text-gray-800' 
                          : 'bg-gray-100 text-gray-800'
                    } shadow-md`}
                  >
                    <div className="text-xs opacity-70 mb-1">{msg.timestamp}</div>
                    <div className="break-words">{msg.text}</div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="text-left mb-3">
                  <div className="inline-block p-3 bg-gray-100 rounded-lg typing-indicator">
                    <div className="text-xs text-gray-500 mb-1">{remoteName}</div>
                    <div className="text-gray-600">{t('typing')}</div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* 入力エリア */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
                placeholder={t('inputPlaceholder')}
                className="flex-1 p-3 border rounded-lg border-gray-300"
              />
              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors"
              >
                {t('send')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
