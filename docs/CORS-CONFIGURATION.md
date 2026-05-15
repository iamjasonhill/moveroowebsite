# CORS (Cross-Origin Resource Sharing) Configuration

## Overview

Added `Access-Control-Allow-Origin` headers to control which external domains
can access resources from moveroo.com.au.

---

## 🔒 CORS Policy Summary

### 1. **Astro Build Assets** (`/_astro/*`)

```
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=31536000, immutable
```

**Why**: Astro-generated CSS, JS bundles with hashed filenames\
**Security**: Safe to allow all origins (files are immutable and public)\
**Use Case**: CDN distribution, faster loading from any origin

### 2. **Font Files** (`/fonts/*`)

```
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=31536000, immutable
```

**Why**: Web fonts need CORS headers to load properly\
**Security**: Safe to allow all origins (fonts are public assets)\
**Use Case**: Prevents CORS errors when loading custom fonts

### 3. **All Other Resources** (`/*`)

```
No Access-Control-Allow-Origin header
```

**Why**: HTML pages, images, etc.\
**Security**: Most restrictive - no cross-origin access\
**Use Case**: Main website content stays protected

---

## 🎯 Security Considerations

### ✅ Safe to Allow All Origins (`*`)

These resources are safe to share publicly:

- **Astro bundles**: Hashed filenames, immutable, public code
- **Fonts**: Public assets, no sensitive data
- **Images** (if added): Public marketing materials

### ⚠️ Restricted to Same Origin

These resources should NOT be shared:

- **Custom scripts**: Could contain business logic
- **HTML pages**: Prevents scraping and unauthorized embedding
- **API endpoints** (if added): Sensitive data

### 🚫 Never Allow All Origins

Do NOT add `Access-Control-Allow-Origin: *` to:

- API endpoints with user data
- Authentication endpoints
- Admin pages
- Forms with CSRF tokens

---

## 📊 CORS Headers Explained

### What is CORS?

CORS (Cross-Origin Resource Sharing) is a security feature that controls which
external websites can access your resources.

**Example Scenario**:

```
Site A (example.com) tries to load a font from Site B (moveroo.com.au)
```

**Without CORS header**: ❌ Browser blocks the request\
**With CORS header**: ✅ Browser allows the request

### Common CORS Values

| Value                      | Meaning                | Security Level                   |
| -------------------------- | ---------------------- | -------------------------------- |
| `*`                        | Allow all origins      | Low (use for public assets only) |
| `https://moveroo.com.au`   | Allow same origin only | High                             |
| `https://trusted-site.com` | Allow specific origin  | Medium                           |
| (no header)                | Block all cross-origin | Highest                          |

---

## 🧪 Testing CORS Headers

### Test 1: Check Headers Are Applied

```bash
# Test Astro assets (should allow all origins)
curl -I https://moveroo.com.au/_astro/some-file.css

# Expected:
# Access-Control-Allow-Origin: *
```

```bash
# Test HTML pages (should have no CORS header)
curl -I https://moveroo.com.au/

# Expected:
# (no Access-Control-Allow-Origin header)
```

### Test 2: Browser Console

Open browser DevTools and check for CORS errors:

**Before CORS headers**:

```
❌ Access to font at 'https://moveroo.com.au/fonts/inter.woff2'
   from origin 'https://example.com' has been blocked by CORS policy
```

**After CORS headers**:

```
✅ No CORS errors
```

---

## 🔄 When to Update CORS Configuration

### Add New Asset Types

If you add new public assets, update `vercel.json`:

```json
{
	"source": "/images/(.*)",
	"headers": [
		{
			"key": "Access-Control-Allow-Origin",
			"value": "*"
		}
	]
}
```

### Add API Endpoints

If you add API endpoints, be restrictive:

```json
{
	"source": "/api/(.*)",
	"headers": [
		{
			"key": "Access-Control-Allow-Origin",
			"value": "https://trusted-app.com"
		},
		{
			"key": "Access-Control-Allow-Methods",
			"value": "GET, POST, OPTIONS"
		},
		{
			"key": "Access-Control-Allow-Headers",
			"value": "Content-Type, Authorization"
		}
	]
}
```

### Subdomain Access

If you need subdomain access (e.g., `app.moveroo.com.au`):

```json
{
	"key": "Access-Control-Allow-Origin",
	"value": "https://app.moveroo.com.au"
}
```

---

## 🚨 Common Issues & Solutions

### Issue 1: Font Not Loading

**Error**: `CORS policy: No 'Access-Control-Allow-Origin' header`

**Solution**: ✅ Already fixed - fonts have `Access-Control-Allow-Origin: *`

### Issue 2: Script Blocked from External Site

**Error**: Script from moveroo.com.au blocked on external site

**Solution**: This is intentional. Scripts are restricted to same origin for
security.

### Issue 3: API Endpoint Blocked

**Error**: API call from different domain blocked

**Solution**: Add specific CORS headers for API routes (see "Add API Endpoints"
above)

---

## 📝 Current Configuration

```json
{
	"headers": [
		{
			"source": "/_astro/(.*)",
			"headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }]
		},
		{
			"source": "/fonts/(.*)",
			"headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }]
		}
	]
}
```

---

## 🔗 Related Security Headers

CORS works alongside other security headers:

| Header                        | Purpose                 | Current Value                     |
| ----------------------------- | ----------------------- | --------------------------------- |
| `Access-Control-Allow-Origin` | CORS control            | Varies by resource                |
| `X-Frame-Options`             | Prevent clickjacking    | `SAMEORIGIN`                      |
| `Content-Security-Policy`     | Script/resource control | Configured                        |
| `Referrer-Policy`             | Referrer info control   | `strict-origin-when-cross-origin` |

---

## 📚 Further Reading

- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Vercel Headers Documentation](https://vercel.com/docs/edge-network/headers)
- [OWASP: CORS Security](https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny)

---

**Last Updated**: 2025-11-29\
**Status**: ✅ Configured - Secure and functional
