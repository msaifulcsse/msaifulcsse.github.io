(function() {
  'use strict';

  // Check if running in production (not localhost)
  const isProduction = !window.location.hostname.includes('localhost') && 
                        !window.location.hostname.includes('127.0.0.1') &&
                        !window.location.hostname.includes('192.168.') &&
                        !window.location.hostname.includes('.local');

  if (!isProduction) {
    console.log('Security measures disabled - running in development mode');
    return;
  }

  console.log('Security measures enabled - running in production mode');

  // Prevent copy
  document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent cut
  document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent paste
  document.addEventListener('paste', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent select all
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      e.preventDefault();
      return false;
    }
  });

  // Prevent text selection
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent drag
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent developer tools shortcuts
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+I (Inspect)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+J (Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+C (Element picker)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+U (View source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'U') {
      e.preventDefault();
      return false;
    }
  });

  // Disable right-click on images
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
  });

  console.log('Content protection enabled');
})();